
import { Todo } from '../../types'
import { TodoItem } from '../todo-item/TodoItem'
import style from './TodoList.module.css'

export function TodoList({todoList, setTodoList}:{todoList:Todo[], setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>}){

    return (
        <ul>
            {todoList.map((item:Todo)=>{
                return <TodoItem key={item.id} setTodoList={setTodoList} item={item}/>
            })}
        </ul>
    )
}