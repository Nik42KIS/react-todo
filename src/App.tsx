import { useEffect, useState } from 'react'

import style from './App.module.css'
import { List, Status, Todo } from './types'
import { TodoList } from './components/todo-list/TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialValue: Todo[] = [
    {
      text: 'Example of task',
      status: 'active',
      id: uuidv4()
    }
  ]
  const [todoList, setTodoList] = useState<Todo[]>(initialValue)
  const [inputValue, setInputValue] = useState('')
  const [filteredList, setFilteredList] = useState<Todo[]>([])
  const [status, setStatus] = useState<List>('All')




 
  function createTodo(text: string) {
    setTodoList((items: Todo[]) => {
      return [
        ...items,
        {
          text,
          status: 'active',
          id: uuidv4()
        }
      ]
    })
    setInputValue('')
  }

  function filterList (status:string) {
    if(status === 'Active'){
      setStatus('Active')
      setFilteredList(todoList.filter((item)=> item.status==='active')) 
    } else if (status === 'Completed'){
      setStatus('Completed')
      setFilteredList(todoList.filter(item => item.status === 'completed')) 
    } else{
      setStatus('All')
      setFilteredList(todoList) 
    }
    
  }
  console.log(todoList)
  return (
    <div className={style.wrap}>
      <form action="submit" onSubmit={(e) => {
        e.preventDefault()
        createTodo(inputValue)
      }}>
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='What needs to be done?' />
      </form>
      <ul className={style.status_list}>
        <li onClick={()=>filterList('All')} className={style.status_item}>All</li>
        <li onClick={()=>filterList('Active')} className={style.status_item}>Active</li>
        <li onClick={()=>filterList('Completed')} className={style.status_item}>Completed</li>
      </ul>
      <TodoList setTodoList={setTodoList} todoList={status === 'All' ? todoList : filteredList} />
    </div>
  )
}

export default App
