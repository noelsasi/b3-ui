export function BrandsSection() {
  const brands = [
    'Chanel',
    'Calvin Klein',
    'Guess',
    'Gucci',
    'Dolce & Gabbana',
    'Adidas',
    "Levi's",
    'Versace',
  ]

  return (
    <section id="brands" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center w-full h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="text-2xl font-bold text-foreground">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

