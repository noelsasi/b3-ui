import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-gray-50 py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className={`relative overflow-hidden  bg-emerald-900 h-fit transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <img
              src='https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500&h=500&fit=crop&q=80'
              alt='Rose gold bracelet on green leaf'
            />
          </div>

          <div className={`flex flex-col gap-8 h-fit transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Top Testimonial */}
            <p className='mb-4 text-lg italic text-gray-700 lg:text-xl'>
              "The craftsmanship is absolutely stunning, and the attention to
              detail is great!"
            </p>
            <div>
              <p className='font-semibold text-gray-900'>Michelle Li</p>
              <p className='text-sm text-gray-600'>Artist</p>
            </div>

            <div className='relative overflow-hidden  bg-gray-200'>
              <div className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=500&h=300&fit=crop&q=80'
                  alt='Rose gold ring with emerald stones'
                />

              </div>
            </div>
          </div>

          <div className={`flex flex-col gap-8 h-fit transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
          

            <div className='relative overflow-hidden  bg-gray-200'>
              <div className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1633811697864-671f7092fa9d?w=500&h=300&fit=crop&q=80'
                  alt='Rose gold ring with emerald stones'
                />

              </div>
            </div>

              {/* Top Testimonial */}
              <p className='mb-4 text-lg italic text-gray-700 lg:text-xl'>
              "I love knowing that I'm wearing something truly unique!"
            </p>
            <div>
              <p className='font-semibold text-gray-900'>Diana Ella</p>
              <p className='text-sm text-gray-600'>Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
