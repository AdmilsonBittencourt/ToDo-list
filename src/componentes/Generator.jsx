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
        event.target.setCustomValidity('')
        setItemText(event.target.value) 
    }

    function onDelete(contentToDelete){
        const listWhitoutItem = items.filter((content) => {
            return content != contentToDelete;
        })

        setItems(listWhitoutItem)
    }

    function invalidInput(){
        event.target.setCustomValidity("Campo obrigatorio")
    }

    
    return (
        <div className={style.container}>
            
            <form onSubmit={addNewItem} className={style.formContainer}>
                <input
                    type="text" 
                    placeholder="Adcionar Item"
                    onChange={newItemTextChange}
                    onInvalid={invalidInput}
                    value={itemText}
                    required
                    />
                <button disabled={itemText.length === 0} type="submit">Adcionar</button>
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