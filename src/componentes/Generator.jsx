import style from './Generator.module.css'
import { Item } from './Item'
import { useState } from 'react'

export function Generator(){

    const [items, setItems] = useState([])

    const [itemText, setItemText] = useState('')

    function addNewItem(){
        event.preventDefault();

        setItems([...items, itemText]);
        setItemText('');
    }

    function newItemTextChange(){
        setItemText(event.target.value) 
    }

    function onDelete(contentToDelete){
        const listWhitoutItem = items.filter((content) => {
            return content != contentToDelete;
        })

        console.log(listWhitoutItem)
        setItems(listWhitoutItem)
    }
    
    return (
        <div className={style.container}>
            
            <form onSubmit={addNewItem} className={style.formContainer}>
                <input
                    type="text" 
                    placeholder="Adcionar Item"
                    onChange={newItemTextChange}
                    value={itemText}
                    />
                <button type="submit">Adcionar</button>
            </form>

            <div className={style.itemsList}>
                {items.map(( content) => {
                    return(
                        <Item 
                            key={content}
                            content={content}
                            onDelete={onDelete}
                        />
                    )
                })}
                
            </div>

        </div>
    )
}