import type { FC } from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostman,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiSpacy,
  SiPandas,
  SiNumpy,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiMeta,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { Code2, Cpu, Database, Cloud, Globe } from 'lucide-react'

export interface SkillIconProps {
  name: string
  iconKey?: string
  className?: string
  size?: number
}

interface IconConfig {
  component: FC<{ size?: number; className?: string }>
  colorClass: string
}

const ICON_MAP: Record<string, IconConfig> = {
  // Languages
  SiJavascript: { component: SiJavascript, colorClass: 'text-amber-500 dark:text-amber-400' },
  SiTypescript: { component: SiTypescript, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiPython: { component: SiPython, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiMysql: { component: SiMysql, colorClass: 'text-sky-600 dark:text-sky-400' },
  SiCplusplus: { component: SiCplusplus, colorClass: 'text-blue-700 dark:text-blue-400' },

  // Frontend
  SiReact: { component: SiReact, colorClass: 'text-cyan-600 dark:text-cyan-400' },
  SiNextdotjs: { component: SiNextdotjs, colorClass: 'text-zinc-900 dark:text-zinc-100' },
  SiTailwindcss: { component: SiTailwindcss, colorClass: 'text-cyan-600 dark:text-cyan-400' },
  SiFramer: { component: SiFramer, colorClass: 'text-pink-600 dark:text-pink-400' },
  SiHtml5: { component: SiHtml5, colorClass: 'text-orange-600 dark:text-orange-400' },
  SiCss: { component: SiCss, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiCss3: { component: SiCss, colorClass: 'text-blue-600 dark:text-blue-400' },

  // Backend
  SiNodedotjs: { component: SiNodedotjs, colorClass: 'text-emerald-600 dark:text-emerald-400' },
  SiExpress: { component: SiExpress, colorClass: 'text-zinc-900 dark:text-zinc-200' },
  SiFastapi: { component: SiFastapi, colorClass: 'text-teal-600 dark:text-teal-400' },
  SiPostman: { component: SiPostman, colorClass: 'text-orange-600 dark:text-orange-400' },
  SiSocketdotio: { component: SiSocketdotio, colorClass: 'text-zinc-900 dark:text-zinc-100' },

  // Databases
  SiMongodb: { component: SiMongodb, colorClass: 'text-emerald-600 dark:text-emerald-400' },
  SiPostgresql: { component: SiPostgresql, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiRedis: { component: SiRedis, colorClass: 'text-red-600 dark:text-red-400' },

  // AI/ML
  SiTensorflow: { component: SiTensorflow, colorClass: 'text-amber-600 dark:text-amber-400' },
  SiPytorch: { component: SiPytorch, colorClass: 'text-orange-600 dark:text-orange-400' },
  SiScikitlearn: { component: SiScikitlearn, colorClass: 'text-amber-700 dark:text-amber-400' },
  SiSpacy: { component: SiSpacy, colorClass: 'text-cyan-600 dark:text-cyan-400' },
  SiPandas: { component: SiPandas, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiNumpy: { component: SiNumpy, colorClass: 'text-sky-600 dark:text-sky-400' },

  // Tools & Cloud
  SiGit: { component: SiGit, colorClass: 'text-orange-600 dark:text-orange-400' },
  SiDocker: { component: SiDocker, colorClass: 'text-sky-600 dark:text-sky-400' },
  SiLinux: { component: SiLinux, colorClass: 'text-amber-600 dark:text-amber-400' },
  SiVisualstudiocode: { component: Code2, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiFigma: { component: SiFigma, colorClass: 'text-purple-600 dark:text-purple-400' },
  SiVercel: { component: SiVercel, colorClass: 'text-zinc-900 dark:text-zinc-100' },
  SiNetlify: { component: SiNetlify, colorClass: 'text-cyan-600 dark:text-cyan-400' },
  SiAmazon: { component: FaAws, colorClass: 'text-amber-600 dark:text-amber-400' },
  SiGithubactions: { component: SiGithubactions, colorClass: 'text-blue-600 dark:text-blue-400' },
  SiMeta: { component: SiMeta, colorClass: 'text-blue-600 dark:text-blue-400' },
}

export function SkillIcon({ name, iconKey, className = '', size = 16 }: SkillIconProps) {
  const config = (iconKey && ICON_MAP[iconKey]) || null

  if (config) {
    const IconComponent = config.component
    return <IconComponent size={size} className={`${config.colorClass} ${className} shrink-0`} />
  }

  // Fallbacks by name
  const lower = name.toLowerCase()
  if (lower.includes('cloud') || lower.includes('aws')) {
    return <Cloud size={size} className={`text-amber-600 dark:text-amber-400 ${className} shrink-0`} />
  }
  if (lower.includes('data') || lower.includes('sql') || lower.includes('db')) {
    return <Database size={size} className={`text-emerald-600 dark:text-emerald-400 ${className} shrink-0`} />
  }
  if (lower.includes('ai') || lower.includes('ml') || lower.includes('model') || lower.includes('rag')) {
    return <Cpu size={size} className={`text-purple-600 dark:text-purple-400 ${className} shrink-0`} />
  }
  if (lower.includes('api') || lower.includes('web') || lower.includes('rest')) {
    return <Globe size={size} className={`text-blue-600 dark:text-blue-400 ${className} shrink-0`} />
  }

  return <Code2 size={size} className={`text-primary ${className} shrink-0`} />
}

export default SkillIcon
