export function Footer() {
  return (
    <footer className='bg-muted border-t'>
      <div className='container mx-auto px-4 py-12'>
        <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-5'>
          {/* Project B3 */}
          <div>
            <h3 className='text-foreground mb-4 text-2xl font-bold'>
              Project B3
            </h3>
            <p className='text-muted-foreground text-sm'>
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h4 className='mb-4 font-semibold uppercase'>SHOP</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  All Collections
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Winter Edition
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Discount
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className='mb-4 font-semibold uppercase'>COMPANY</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className='mb-4 font-semibold uppercase'>SUPPORT</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* PAYMENT METHODS */}
          <div>
            <h4 className='text-foreground mb-4 font-semibold uppercase'>
              PAYMENT METHODS
            </h4>
            <div className='flex gap-4'>
              <div className='border-border bg-background text-foreground flex h-8 w-12 items-center justify-center rounded border text-xs font-bold'>
                MC
              </div>
              <div className='border-border bg-background text-foreground flex h-8 w-12 items-center justify-center rounded border text-xs font-bold'>
                VISA
              </div>
              <div className='border-border bg-background text-foreground flex h-8 w-12 items-center justify-center rounded border text-xs font-bold'>
                PP
              </div>
            </div>
          </div>
        </div>

        <div className='text-muted-foreground border-border border-t pt-8 text-center text-sm'>
          Copyright ©2022 Project B3. All right reserved
        </div>
      </div>
    </footer>
  )
}
