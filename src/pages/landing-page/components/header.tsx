import { Settings, ChevronDown } from 'lucide-react'
import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import { ProfileDropdown } from '@/components/profile-dropdown'

export function Header() {
  const { auth } = useAuthStore()
  const isAuthenticated = !!auth.user && !!auth.accessToken

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className='bg-white sticky top-0 z-50 border-b border-gray-100'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4 lg:px-8'>
        {/* Logo */}
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={handleLogoClick}
        >
          <Settings className='h-6 w-6 text-emerald-700' />
          <span className='text-xl font-semibold text-gray-900'>
            Project B3
          </span>
        </div>

        {/* Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          <a
            href='#shop'
            className='text-gray-700 hover:text-emerald-700 transition-colors font-medium'
          >
            Shop
          </a>
          <div className='relative group'>
            <button className='flex items-center gap-1 text-gray-700 hover:text-emerald-700 transition-colors font-medium'>
              Collections
              <ChevronDown className='h-4 w-4' />
            </button>
          </div>
          <a
            href='#company'
            className='text-gray-700 hover:text-emerald-700 transition-colors font-medium'
          >
            Company
          </a>
          <a
            href='#reviews'
            className='text-gray-700 hover:text-emerald-700 transition-colors font-medium'
          >
            Reviews
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className='flex items-center gap-3'>
          {isAuthenticated ? (
            <ProfileDropdown />
          ) : (
            <>
              <Button
                variant='outline'
                size='sm'
                onClick={() => (window.location.href = '/sign-in')}
                className='rounded-none border border-primary'
              >
                Log In
              </Button>
              <Button
                size='sm'
                onClick={() => (window.location.href = '/sign-in')}
                className='rounded-none border border-primary'
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
