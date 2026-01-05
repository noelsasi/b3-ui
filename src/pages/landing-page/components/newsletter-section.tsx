import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription here
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Subscribe to our newsletter to get updates to our latest collections
          </h2>
          <p className="text-muted-foreground mb-8">
            Get 20% off on your first order just by subscribing to our newsletter
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 bg-background"
                required
              />
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            You will be able to unsubscribe at any time. Read our{' '}
            <a href="#" className="underline hover:text-foreground">
              Privacy Policy here
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

