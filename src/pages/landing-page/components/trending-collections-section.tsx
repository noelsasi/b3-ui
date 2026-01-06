import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useEffect, useState } from 'react'

const collections = [
  {
    name: 'Eternal Radiance',
    price: '$120',
    category: 'Necklace',
    image:
      'https://images.unsplash.com/photo-1693213085235-ea6deadf8cee?w=600&h=800&fit=crop&q=80',
    badge: 'Best Seller',
  },
  {
    name: 'Celestial Harmony',
    price: '$141',
    category: 'Bracelet',
    image:
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=800&fit=crop&q=80',
  },
  {
    name: 'Luminous Grace',
    price: '$89',
    category: 'Bracelet',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop&q=80',
  },
]

export function TrendingCollectionsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    if (isVisible) {
      collections.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => Math.max(prev, index + 1))
        }, index * 150)
      })
    }
  }, [isVisible])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className='bg-gray-50 py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <h2 className={`mb-12 text-center text-3xl font-bold text-gray-900 transition-all duration-700 ease-out lg:text-4xl ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Our Trending Collections
        </h2>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all ${
                index < visibleItems
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDuration: '700ms',
                transitionDelay: `${index * 150}ms`,
                transitionTimingFunction: 'ease-out'
              }}
            >
              {/* Badge */}
              {collection.badge && (
                <div className='absolute left-4 top-4 z-10  px-3 py-1 text-xs font-semibold text-white'>
                  {collection.badge}
                </div>
              )}

              {/* Image */}
              <div className='relative aspect-3/4 w-full overflow-hidden bg-emerald-900'>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className='h-full w-full object-cover transition-transform group-hover:scale-105'
                />
              </div>

              {/* Content */}
              <div className='py-6'>
                <p className='mb-1 text-sm font-medium text-emerald-700'>
                  {collection.category}
                </p>
                <h3 className=' mb-2 text-xl font-semibold text-gray-900'>
                  {collection.name}
                </h3>
                <p className='text-lg font-bold text-gray-900'>
                  {collection.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

