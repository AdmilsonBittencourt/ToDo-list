import { XCircle } from "@phosphor-icons/react"
import style from './Item.module.css'

export function Item(){
    return (
        <div className={style.itemContainer}>
            <p>Item</p>
            <XCircle size={20}/>
        </div>
    )
}