import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LimitedOfferBanner() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-border">
          {/* Image Side */}
          <div
            className="h-64 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://placehold.co/600x400/1e293b/ffffff?text=Limited+Offer)',
            }}
          />

          {/* Content Side */}
          <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              LIMITED OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              35% off only this friday and get special gift
            </h2>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-accent w-fit"
            >
              Grab it now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

