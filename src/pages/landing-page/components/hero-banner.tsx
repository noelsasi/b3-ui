import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className='bg-muted relative h-[600px] w-full overflow-hidden'>
      {/* Placeholder Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://placehold.co/1920x1080/9ca3af/ffffff?text=Summer+Collection)',
        }}
      >
        <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex h-full items-center justify-center'>
        <div className='px-4 text-center text-white'>
          <h1 className='mb-44 text-5xl font-bold md:text-6xl'>
            Level up your style with our summer collections
          </h1>
          <Button
            size='lg'
            className='bg-background text-foreground hover:bg-accent'
          >
            Shop now <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
        className='bg-background/80 hover:bg-background absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded p-2 transition-colors'
        aria-label='Previous slide'
      >
        <ChevronLeft className='text-foreground h-6 w-6' />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
        className='bg-background/80 hover:bg-background absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded p-2 transition-colors'
        aria-label='Next slide'
      >
        <ChevronRight className='text-foreground h-6 w-6' />
      </button>

      {/* Dots Indicator */}
      <div className='absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
