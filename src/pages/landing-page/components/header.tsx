import { Link } from '@tanstack/react-router'
import { Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

export function Header() {
  const { auth } = useAuthStore()
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

          {/* Navigation */}
          <nav className='hidden items-center gap-6 md:flex'>
            <DropdownMenu>
              <DropdownMenuTrigger className='hover:text-primary text-foreground flex items-center gap-1 transition-colors'>
                Shop <ChevronDown className='h-4 w-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Products</DropdownMenuItem>
                <DropdownMenuItem>Men</DropdownMenuItem>
                <DropdownMenuItem>Women</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href='#featured-products'
              className='hover:text-primary text-foreground transition-colors'
            >
              Most wanted
            </a>
            <a
              href='#featured-products'
              className='hover:text-primary text-foreground transition-colors'
            >
              New arrival
            </a>
            <a
              href='#brands'
              className='hover:text-primary text-foreground transition-colors'
            >
              Brands
            </a>
          </nav>

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
            <ThemeSwitch />

            {/* Auth Actions */}
            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <Button asChild>
                <Link to='/sign-in'>Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
