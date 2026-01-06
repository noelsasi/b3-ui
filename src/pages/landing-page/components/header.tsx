import { CircleUser, Search, ShoppingCart } from 'lucide-react'
import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getDisplayName, ProfileDropdown } from '@/components/profile-dropdown'

export function Header() {
  const { auth } = useAuthStore()
  const user = auth.user
  const isAuthenticated = !!auth.user && !!auth.accessToken

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className='bg-background sticky top-0 z-50'>
      {/* Main Header */}
      <div className='bg-background border-b'>
        <div className='container mx-auto flex items-center justify-between px-4 py-4'>
          {/* Logo */}
          <div
            className='text-foreground cursor-pointer text-2xl font-bold'
            onClick={handleLogoClick}
          >
            Project B3
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center gap-4'>
            {/* Search */}
            <div className='relative hidden items-center md:flex'>
              <Search className='text-muted-foreground absolute left-3 h-4 w-4' />
              <Input
                type='search'
                placeholder='Search'
                className='bg-background w-64 pl-9'
              />
            </div>

            {/* Cart */}
            <Button variant='ghost' size='icon' aria-label='Shopping cart'>
              <ShoppingCart className='h-5 w-5' />
            </Button>

            {/* Theme Switch */}
            {/* <ThemeSwitch /> */}

            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <div
                className='flex cursor-pointer items-center gap-2'
                onClick={() => (window.location.href = '/sign-in')}
              >
                <CircleUser className='h-4 w-4' />
                <span className='text-sm'>
                  {user ? getDisplayName(user?.email) : 'Sign In'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
