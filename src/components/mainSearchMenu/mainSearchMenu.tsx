import React from 'react';
import styles from "./mainSearchMenu.module.scss"

const MainSearchMenu = () => {
    return (
        <ul className={styles.mainSearchBlock}>
            <li className={styles.blockLines}>
                <i className="fa-solid fa-house"></i>
                <a>Главная</a>
            </li>
            <li className={styles.blockLines}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <a>Поиск</a>
            </li>
        </ul>
    );
};

export default MainSearchMenu;