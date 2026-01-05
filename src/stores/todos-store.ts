import axios from 'axios'
import { create } from 'zustand'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  addTodo: (todo: Todo) => void
  updateTodo: (todo: Todo) => void
  deleteTodo: (id: Todo['id']) => void
  getTodos: () => void
}

export const useTodosStore = create<TodosState>()((set) => {
  return {
    todos: [],
    setTodos: (todos: Todo[]) => set({ todos }),
    addTodo: (todo: Todo) =>
      set((state) => ({ todos: [...state.todos, todo] })),
    updateTodo: (todo: Todo) =>
      set((state) => ({
        todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
      })),
    deleteTodo: (id: Todo['id']) =>
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    getTodos: async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1'
        )
        set({ todos: response.data })
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
  }
})
