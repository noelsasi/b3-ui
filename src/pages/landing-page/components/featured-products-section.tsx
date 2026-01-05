import { useState } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 1,
    name: 'Autumn Dress',
    price: 58,
    originalPrice: 85,
    image: 'https://placehold.co/400x500/e5e7eb/374151?text=Autumn+Dress',
    onSale: true,
  },
  {
    id: 2,
    name: 'Gray Shirt',
    price: 87,
    originalPrice: null,
    image: 'https://placehold.co/400x500/e5e7eb/374151?text=Gray+Shirt',
    onSale: false,
  },
  {
    id: 3,
    name: 'Leather Coat',
    price: 32,
    originalPrice: 40,
    image: 'https://placehold.co/400x500/e5e7eb/374151?text=Leather+Coat',
    onSale: true,
  },
]

export function FeaturedProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="featured-products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured products</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous products"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next products"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {product.onSale && (
                <Badge className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground">
                  SALE
                </Badge>
              )}
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-foreground">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-foreground' : 'w-1 bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

