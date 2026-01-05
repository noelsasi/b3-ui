import { BrandsSection } from './components/brands-section'
import { CuratedPicksSection } from './components/curated-picks-section'
import { CustomerExperienceSection } from './components/customer-experience-section'
import { FeaturedProductsSection } from './components/featured-products-section'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HeroBanner } from './components/hero-banner'
import { LimitedOfferBanner } from './components/limited-offer-banner'
import { NewsletterSection } from './components/newsletter-section'

export function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <HeroBanner />
        <BrandsSection />
        <CustomerExperienceSection />
        <CuratedPicksSection />
        <FeaturedProductsSection />
        <LimitedOfferBanner />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
