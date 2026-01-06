import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useEffect, useState } from 'react'

const categories = [
  {
    name: 'Rings',
    count: '120 Products',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80',
  },
  {
    name: 'Earring',
    count: '131 Products',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=80',
  },
  {
    name: 'Bracelet',
    count: '79 Products',
    image:
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=600&fit=crop&q=80',
  },
]

export function CategoriesSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const totalItems = categories.length + 1 // +1 for "Browse All" card
      for (let i = 0; i < totalItems; i++) {
        setTimeout(() => {
          setVisibleItems((prev) => Math.max(prev, i + 1))
        }, i * 120)
      }
    }
  }, [isVisible])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <h2 className={`mb-12 text-center text-3xl font-bold text-gray-900 transition-all duration-700 ease-out lg:text-4xl ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Explore Our Diverse Jewelry Categories for Every Occasion
        </h2>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-emerald-900 shadow-sm transition-all hover:shadow-lg ${
                index < visibleItems
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDuration: '700ms',
                transitionDelay: `${index * 120}ms`,
                transitionTimingFunction: 'ease-out'
              }}
            >
              <div className='relative aspect-square w-full'>
                <img
                  src={category.image}
                  alt={category.name}
                  className='h-full w-full object-cover transition-transform group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className=' mb-1 text-2xl font-semibold'>
                    {category.name}
                  </h3>
                  <p className='text-sm opacity-90'>{category.count}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Browse All Card */}
          <div className={`group flex items-center justify-center  bg-emerald-800 p-8 shadow-sm transition-all hover:bg-emerald-900 hover:shadow-lg ${
            categories.length < visibleItems
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
          style={{ 
            transitionDuration: '700ms',
            transitionDelay: `${categories.length * 120}ms`,
            transitionTimingFunction: 'ease-out'
          }}>
            <div className='text-center text-white'>
              <h3 className=' mb-2 text-2xl font-semibold'>
                Browse all Products
              </h3>
              <ArrowRight className='mx-auto h-6 w-6 transition-transform group-hover:translate-x-1' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

