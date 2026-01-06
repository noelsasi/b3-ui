import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ExceptionalJewelrySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center'>
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <h2 className=' mb-6 text-3xl font-bold text-gray-900 lg:text-4xl'>
              Exceptional Jewelry for Your Unique Moments
            </h2>
            <p className='mb-8 text-base leading-relaxed text-gray-600 lg:text-lg'>
              Each piece in our collection is crafted with unparalleled
              attention to detail and quality. From timeless classics to
              contemporary designs, our jewelry embodies the perfect blend of
              artistry and elegance, making every moment special.
            </p>
            <Button
              variant='outline'
              className='px-8 py-6 text-base font-semibold rounded-none border border-primary'
            >
              Discover Now
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>

          {/* Right Image with Hotspots */}
          <div className={`relative transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className='relative overflow-hidden  bg-emerald-100'>
              {/* <div className='aspect-4/5 w-full'> */}
              <img
                src='https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?w=600&h=350&fit=crop&q=80'
                alt='Traditional gold necklace with pendant'
                className='h-full w-full object-cover'
              />
              {/* </div> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

