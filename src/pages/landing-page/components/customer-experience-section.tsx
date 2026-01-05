import { RefreshCw, Shield, Calendar, Truck } from 'lucide-react'

const features = [
  {
    icon: RefreshCw,
    title: 'Original Products',
    description:
      'We provide money back guarantee if the product are not original',
  },
  {
    icon: Shield,
    title: 'Satisfaction Guarantee',
    description:
      "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    icon: Calendar,
    title: 'New Arrival Everyday',
    description: 'We updates our collections almost everyday',
  },
  {
    icon: Truck,
    title: 'Fast & Free Shipping',
    description: 'We offer fast and free shipping for our loyal customers',
  },
]

export function CustomerExperienceSection() {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto'>
          <div className='mb-12 flex flex-col items-start justify-between gap-8 md:flex-row'>
            <h2 className='text-foreground flex-shrink-0 text-3xl font-bold'>
              We provide best customer experiences
            </h2>
            <div className='flex items-center gap-4'>
              <div className='bg-border hidden h-12 w-px md:block' />
              <p className='text-muted-foreground'>
                We ensure our customers have the best shopping experience
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className='rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md'
                >
                  <div className='bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full'>
                    <Icon className='text-foreground h-6 w-6' />
                  </div>
                  <h3 className='text-foreground mb-2 font-semibold'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
