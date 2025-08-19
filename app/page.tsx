import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { ContactBanner } from "@/components/contact-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <Hero />
      <FeaturesSection />
      <GalleryCarousel />
      <StatsSection />
      <NewsSection />
      <ContactBanner />
    </main>
  )
}
