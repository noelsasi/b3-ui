import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-4 text-center lg:px-8'>
        <h2 className={`mb-4 text-3xl font-bold text-gray-900 transition-all duration-1000 ease-out lg:text-4xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          Explore Our Exquisite Jewelry Collections
        </h2>
        <p className={`mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 transition-all duration-1000 ease-out delay-200 lg:text-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          Discover the perfect piece for every occasion, crafted with
          unparalleled artistry.
        </p>
        <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <Button
            size='lg'
            variant='outline'
            className='px-8 py-6 text-base font-semibold rounded-none border border-primary lg:px-12 lg:py-7 lg:text-lg'
          >
            Get Started Now
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  )
}

