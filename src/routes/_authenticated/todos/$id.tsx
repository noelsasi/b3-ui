import axios from 'axios'
import { createFileRoute } from '@tanstack/react-router'
import TodoDetails from '@/features/todos/todo-details'

export const Route = createFileRoute('/_authenticated/todos/$id')({
  loader: async ({ params }) => {
    const { id } = params
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    )
    return res.data
  },
  component: TodoDetails,
})
