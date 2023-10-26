import { XCircle } from "@phosphor-icons/react"
import style from './Item.module.css'

// eslint-disable-next-line react/prop-types
export function Item({ content, onDelete }){

    function deleteItem(){
        onDelete(content)
    }

    return (
        <div className={style.itemContainer}>
            <p>{content}</p>
            <XCircle onClick={deleteItem} size={20} className={style.btn_delete}/>
        </div>
    )
}