import { Flower2, HeartHandshake, Snowflake, Sparkles, Star } from "lucide-react"
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useEffect, useState } from 'react'

const brands = [
  { name: 'Logoipsum', icon: <Snowflake className='h-5 w-5' /> },
  { name: 'Logoipsum', icon: <HeartHandshake className='h-5 w-5' /> },
  { name: 'Logoipsum', icon: <Flower2 className='h-5 w-5' /> },
  { name: 'Logoipsum', icon: <Star className='h-5 w-5' /> },
  { name: 'Logoipsum', icon: <Sparkles className='h-5 w-5' /> },
]

export function BrandsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    if (isVisible) {
      brands.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => Math.max(prev, index + 1))
        }, index * 100)
      })
    }
  }, [isVisible])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-gray-50 py-12 lg:py-16'>
      <div className='container mx-auto px-4 lg:px-8'>
        <h2 className={`mb-12 text-center text-3xl font-bold text-gray-400 transition-all duration-700 ease-out lg:text-xl ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>Trusted by brands</h2>
        <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-16'>
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 text-gray-400 transition-all duration-700 ease-out hover:opacity-70 ${
                index < visibleItems
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className='text-8xl'>{brand.icon}</span>
              <span className='text-2xl font-medium'>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

