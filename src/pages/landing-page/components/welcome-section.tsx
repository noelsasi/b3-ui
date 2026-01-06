import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function WelcomeSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Heading */}
        <div className={`mb-12 text-center transition-all duration-1000 ease-out lg:mb-16 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 lg:text-5xl'>
            Welcome to Chic Charms,
          </h2>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 lg:text-5xl'>
            Where Elegance Meets Beauty
          </h2>
        </div>

        {/* 3 Column Layout */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Column 1: Image top, Text bottom */}
          <div className={`flex flex-col transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className='relative mb-6 overflow-hidden bg-emerald-900'>
              <div className='aspect-4/5 w-full'>
                <img
                  src='https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop&q=80'
                  alt='Gold hoop earrings'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
            <div className='flex-1'>
              <p className='text-base leading-relaxed text-gray-600 lg:text-lg'>
                At Chic Charms, we believe that every piece of jewelry tells a
                story. Our commitment to exceptional craftsmanship and unique
                designs ensures that each creation is not just an accessory, but a
                reflection of your personal style and the moments that matter most.
              </p>
            </div>
          </div>

          {/* Column 2: Text top, Image bottom */}
          <div className={`flex flex-col transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className='mb-6'>
              <p className='text-base leading-relaxed text-gray-600 lg:text-lg'>
                Our talented artisans blend timeless techniques with innovative designs. Each piece is meticulously crafted with attention to detail,
                ensuring timeless elegance and exceptional quality that lasts
                generations.
              </p>
            </div>
            <div className='relative overflow-hidden  bg-emerald-900'>
              <div className='aspect-4/5 w-full'>
                <img
                  src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&q=80'
                  alt='Hand adorned with gold chain bracelets'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* Column 3: Image top, Text with CTA bottom */}
          <div className={`flex flex-col transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className='relative mb-6 overflow-hidden  bg-emerald-900'>
              <img
                src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=450&fit=crop&q=80'
                alt='Gold chain necklace with pendant'
              />
            </div>
            <div className='flex-1'>
              <p className='mb-6 text-base leading-relaxed text-gray-600 lg:text-lg'>
                We invite you to explore our collections and discover the perfect
                piece that resonates with your personal style and story.
              </p>
              <Button
                variant='outline'
                className='px-8 py-6 text-base font-semibold rounded-none border border-primary'
              >
                Discover Now
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
