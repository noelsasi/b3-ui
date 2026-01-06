import { Settings } from 'lucide-react'

export function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='container mx-auto px-4 py-12 lg:px-8'>
        <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Logo and Tagline */}
          <div className='lg:col-span-1'>
            <div className='mb-4 flex items-center gap-2'>
              <Settings className='h-6 w-6 text-emerald-700' />
              <span className='text-xl font-semibold text-gray-900'>
                Project B3
              </span>
            </div>
            <p className='text-sm text-gray-600'>
              Jewelry That Tells Your Story
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className='mb-4 font-semibold uppercase text-gray-900'>
              Company
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#about'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#careers'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className='mb-4 font-semibold uppercase text-gray-900'>
              Products
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#rings'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Ring
                </a>
              </li>
              <li>
                <a
                  href='#earrings'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Earring
                </a>
              </li>
              <li>
                <a
                  href='#bracelets'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Bracelet
                </a>
              </li>
              <li>
                <a
                  href='#necklaces'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Necklace
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div>
            <h4 className='mb-4 font-semibold uppercase text-gray-900'>
              Our Policies
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#privacy'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#terms'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#refund'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href='#conduct'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className='mb-4 font-semibold uppercase text-gray-900'>
              Social Media
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#instagram'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='#facebook'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='#linkedin'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='#youtube'
                  className='text-gray-600 transition-colors hover:text-emerald-700'
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-200 pt-8 text-center text-sm text-gray-600'>
          Copyright Project B3 2025
        </div>
      </div>
    </footer>
  )
}
