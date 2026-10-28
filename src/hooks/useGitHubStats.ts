import { useState, useEffect } from 'react'

interface GitHubStats {
  repos: number
  followers: number
  following: number
  bio: string
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!username) return
    const token = import.meta.env.VITE_GITHUB_TOKEN
    const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {}

    fetch(`https://api.github.com/users/${username}`, { headers })
      .then((r) => r.json())
      .then((d) => {
        setStats({
          repos: d.public_repos ?? 0,
          followers: d.followers ?? 0,
          following: d.following ?? 0,
          bio: d.bio ?? '',
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return { stats, loading }
}
