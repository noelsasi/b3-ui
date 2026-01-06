import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import video from '@/assets/videos/hero_video.mp4'

export function HeroSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation()

  return (
    <section className='relative bg-white py-12 lg:py-20'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Main Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`mb-8 text-center transition-all duration-1000 ease-out lg:mb-12 ${
            titleVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className='mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl xl:text-7xl'>
            Cherish Every Moment with Our Exclusive Jewelry
          </h1>
        </div>

        {/* Hero Image Container */}
        <div
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`relative mb-8 overflow-hidden  bg-emerald-900 transition-all duration-1000 ease-out delay-200 lg:mb-12 ${
            imageVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className='relative aspect-16/10 w-full'>
            {/* Main Jewelry Video */}
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className='h-full w-full object-cover'
            />

           

            {/* Badge - Top Right */}
            <div className='absolute right-8 top-8 hidden  bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm lg:block'>
              <p className=' text-sm font-semibold text-emerald-900 lg:text-base'>
                Jewelry That Tells Your Story
              </p>
            </div>

            {/* Trusted By Section - Bottom Left */}
            <div className='absolute bottom-8 left-8 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm'>
              <p className='mb-2 text-xs text-gray-600 lg:text-sm'>
                Trusted by more over 100+ clients.
              </p>
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className='h-8 w-8 rounded-full border-2 border-white bg-linear-to-br from-emerald-400 to-emerald-600'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          ref={buttonRef as React.RefObject<HTMLDivElement>}
          className={`text-center transition-all duration-1000 ease-out delay-300 ${
            buttonVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <Button
            size='lg'
            variant='outline'
            className='px-8 py-6 text-base font-semibold lg:px-12 lg:py-7 lg:text-lg rounded-none border border-primary'
          >
            Discover Now
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  )
}

