import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { ContactBanner } from "@/components/contact-banner"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <GalleryCarousel />
      <StatsSection />
      <NewsSection />
      <ContactBanner />
    </main>
  )
}
