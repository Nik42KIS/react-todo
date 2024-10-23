
import { useState } from 'react'
import { Status } from '../../types'
import style from './TodoItem.module.css'

export function TodoItem ({text}:{text:string}){
const [status, setStatus] = useState<Status>('active')
    return (
        <li onClick={()=>setStatus((el)=> el ==='active' ? 'completed' : 'active')} className={`${style.item} ${status === 'active' ? style.active : style.completed}`}>
            {text}
        </li>
    )
}