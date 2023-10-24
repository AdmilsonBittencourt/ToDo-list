import { XCircle } from "@phosphor-icons/react"
import style from './Item.module.css'

export function Item({ content }){
    return (
        <div className={style.itemContainer}>
            <p>{content}</p>
            <XCircle size={20} className={style.btn_delete}/>
        </div>
    )
}