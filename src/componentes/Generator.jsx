import style from './Generator.module.css'
import { Item } from './Item'
import { useState } from 'react'

export function Generator(){

    const [items, setItems] = useState(['Lavar louça..'])

    const [itemText, setItemText] = useState('')

    function addNewItem(){
        event.preventDefault();

        setItems([...items, itemText])
    }

    function newItemTextChange(){
        setItemText(event.target.value) 
    }
    
    return (
        <div className={style.container}>
            
            <form onSubmit={addNewItem} className={style.formContainer}>
                <input onChange={newItemTextChange} type="text" placeholder="Adcionar Item"/>
                <button type="submit">Adcionar</button>
            </form>

            <div className={style.itemsList}>
                {items.map((content) => {
                    return(
                        <Item 
                            key={content}
                            content={content}
                        />
                    )
                })}
                
            </div>

        </div>
    )
}