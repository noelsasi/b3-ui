import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const picks = [
  {
    title: 'Best Seller',
    image: 'https://placehold.co/400x500/374151/ffffff?text=Best+Seller',
  },
  {
    title: 'Shop Men',
    image: 'https://placehold.co/400x500/374151/ffffff?text=Shop+Men',
  },
  {
    title: 'Shop Women',
    image: 'https://placehold.co/400x500/374151/ffffff?text=Shop+Women',
  },
  {
    title: 'Shop Casual',
    image: 'https://placehold.co/400x500/374151/ffffff?text=Shop+Casual',
  },
]

export function CuratedPicksSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Curated picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {picks.map((pick) => (
            <div
              key={pick.title}
              className="relative group overflow-hidden rounded-lg aspect-[4/5]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${pick.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">{pick.title}</h3>
                <Button
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-accent"
                >
                  {pick.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

