
import { useState } from 'react'
import { Status, Todo } from '../../types'
import style from './TodoItem.module.css'

export function TodoItem ({item, setTodoList}:{item:Todo, setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>}){
// const [status, setStatus] = useState<Status>('active')
    return (
        <li onClick={()=>{
            // setStatus((el)=> el ==='active' ? 'completed' : 'active')
            setTodoList(todoList => {
                const filteredArr = todoList.filter(i=>{
                    return i.id !== item.id
                })
                return[
                    ...filteredArr,
                    {
                        text:item.text,
                        status: item.status ==='active' ? 'completed' : 'active',
                        id:item.id
                    }
                ]
            })
        }} className={`${style.item} ${item.status === 'active' ? style.active : style.completed}`}>
            {item.text}
        </li>
    )
}