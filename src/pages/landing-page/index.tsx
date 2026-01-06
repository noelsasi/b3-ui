import { BrandsSection } from './components/brands-section'
import { CategoriesSection } from './components/categories-section'
import { CTASection } from './components/cta-section'
import { ExceptionalJewelrySection } from './components/exceptional-jewelry-section'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { TestimonialsSection } from './components/testimonials-section'
import { TrendingCollectionsSection } from './components/trending-collections-section'
import { WelcomeSection } from './components/welcome-section'

export function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Header />
      <main className='flex-1'>
        <HeroSection />
        <BrandsSection />
        <WelcomeSection />
        <ExceptionalJewelrySection />
        <TrendingCollectionsSection />
        <CategoriesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
