import { useLoaderData, useNavigate } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function TodoDetails() {
  const todo = useLoaderData({ from: '/_authenticated/todos/$id' }) as Todo

  const navigate = useNavigate()

  return (
    <div className='container mx-auto p-6'>
      <Card className='max-w-md'>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <Button
              onClick={() => navigate({ to: '/todos' })}
              variant='outline'
              size='icon'
              aria-label='Submit'
            >
              <ArrowLeftIcon />
            </Button>
            <span>Todo #{todo.id}</span>
            <Badge variant={todo.completed ? 'default' : 'secondary'}>
              {todo.completed ? 'Completed' : 'Pending'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-lg font-medium'>{todo.title}</p>
          <div className='text-muted-foreground mt-4 text-sm'>
            User ID: {todo.userId}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
