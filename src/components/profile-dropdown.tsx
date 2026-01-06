import { PersonIcon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/auth-store'
import useDialogState from '@/hooks/use-dialog-state'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOutDialog } from '@/components/sign-out-dialog'

// Get display name from email
export const getDisplayName = (email?: string) => {
  if (email) {
    const emailPart = email.split('@')[0]
    return emailPart
      .split('.')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }
  return 'User'
}

export function ProfileDropdown() {
  const [open, setOpen] = useDialogState()
  const { auth } = useAuthStore()
  const user = auth.user

  // Get initials from email or accountNo
  const getInitials = () => {
    if (user?.email) {
      const parts = user.email.split('@')[0].split('.')
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase()
      }
      return user.email.substring(0, 2).toUpperCase()
    }
    if (user?.accountNo) {
      return user.accountNo.substring(0, 2).toUpperCase()
    }
    return <PersonIcon className='h-4 w-4' />
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/avatars/01.png' alt={user?.email || 'User'} />
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col gap-1.5'>
              <p className='text-sm leading-none font-medium'>
                {getDisplayName(user?.email)}
              </p>
              <p className='text-muted-foreground text-xs leading-none'>
                {user?.email || 'No email'}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to='/settings'>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to='/settings'>Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant='destructive' onClick={() => setOpen(true)}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  )
}
