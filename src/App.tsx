import { useState } from 'react'

import style from './App.module.css'
import { Todo } from './types'
import { TodoList } from './components/todo-list/TodoList'

function App() {

  const initialValue: Todo[] = [
    {
      text: 'Example of task',
      status: 'active'
    }
  ]

  const [todoList, setTodoList] = useState<Todo[]>(initialValue)
  const [inputValue, setInputValue] = useState('')

  function createTodo(text: string) {
    setTodoList((items: Todo[]) => {
      return [
        ...items,
        {
          text,
          status: 'active'
        }
      ]
    })
    setInputValue('')
  }

  return (
    <div className={style.wrap}>
      <form action="submit" onSubmit={(e) => {
        e.preventDefault()
        createTodo(inputValue)
      }}>
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='What needs to be done?' />
      </form>
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
