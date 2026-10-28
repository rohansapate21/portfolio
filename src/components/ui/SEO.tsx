import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/content/data'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: siteConfig.title,
  sameAs: [siteConfig.github, siteConfig.linkedin],
}

export function SEO({ title, description, canonical, ogImage, type = 'website' }: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`

  const desc = description || siteConfig.description
  const image = ogImage || siteConfig.openGraph.image
  const url = canonical || siteConfig.url

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@rohansapate" />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  )
}
