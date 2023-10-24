import style from './Generator.module.css'

export function Generator(){
    return (
        <form className={style.formContainer}>
            <input type="text" placeholder="Adcionar Item"/>
            <button type="submit">Adcionar</button>
        </form>
    )
}