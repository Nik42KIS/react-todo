
import { Todo } from '../../types'
import { TodoItem } from '../todo-item/TodoItem'
import style from './TodoList.module.css'

export function TodoList({todoList}:{todoList:Todo[]}){

    return (
        <ul>
            {todoList.map((item:Todo)=>{
                return <TodoItem text={item.text}/>
            })}
        </ul>
    )
}