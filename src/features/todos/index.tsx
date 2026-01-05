import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTodosStore } from '@/stores/todos-store'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

function Todos() {
  const { todos, getTodos } = useTodosStore()

  const navigate = useNavigate()

  React.useEffect(() => {
    getTodos()
  }, [])
  return (
    <>
      <Header
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Todos' }]}
      />
      <Main fixed className='overflow-auto'>
        <h1 className='mb-4 text-2xl font-bold tracking-tight'>Todos</h1>
        <div className='w-2/4'>
          <div className='flex flex-col gap-4'>
            {todos.map((todo) => (
              <div
                onClick={() => {
                  navigate({ to: `/todos/${todo.id}` })
                }}
                key={todo.id}
                className='flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-800'
              >
                <h2 className='text-lg font-semibold'>{todo.title}</h2>
                <p className='text-muted-foreground text-sm'>
                  {todo.completed ? 'Completed' : 'Not Completed'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}

export default Todos
