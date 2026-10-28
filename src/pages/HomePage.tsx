import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificationsAchievementsSection from '@/components/sections/CertificationsAchievementsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <PageTransition>
      <SEO />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsAchievementsSection />
      <ContactSection />
    </PageTransition>
  )
}
