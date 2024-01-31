import React, {useRef} from 'react';
import styles from "./mainSearchMenu.module.scss"

const MainSearchMenu = () => {
    const searchBlock=useRef(null);
    function clickHandler(event){
        searchBlock.current.querySelectorAll('.'+styles.blockLines).forEach((elem)=>{
            elem.classList.remove(styles.active);
            if(elem.contains(event.target)){
                elem.classList.add(styles.active);
            }
        });
    }
    return (
        <ul className={styles.mainSearchBlock} ref={searchBlock}>
            <li className={styles.blockLines+" "+styles.active} onClick={clickHandler}>
                <i className="fa-solid fa-house"></i>
                <a>Главная</a>
            </li>
            <li className={styles.blockLines} onClick={clickHandler}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <a>Поиск</a>
            </li>
        </ul>
    );
};

export default MainSearchMenu;