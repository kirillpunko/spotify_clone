import React, {useEffect, useRef} from 'react';
import styles from './drop-down-menu.module.scss'

const DropDownMenu = () => {
    const blockRef = useRef(null);

    const handleVarCLick=(event)=>{
        const vars= document.querySelectorAll('.'+styles.dropVar);
        vars.forEach((elem)=>{
            elem.classList.remove(styles.active);
            const check= elem.querySelector('i');
            check.classList.remove(styles.activeCheck);
        })
        event.target.classList.add(styles.active);
        event.target.querySelector('i').classList.add(styles.activeCheck);
    }

    const handleOutsideClick = (event) => {
        const btn = document.getElementById('searchTypeField');
        if (blockRef.current && (!blockRef.current.contains(event.target) && !btn.contains(event.target))) {
            blockRef.current.classList.remove('show');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div ref={blockRef} id='dropDownMenu' className={styles.dropBlock}>
            <div className={styles.dropTitle}>
                Сортировка
            </div>
            <div className={styles.dropVar} onClick={handleVarCLick}>
                Недавно прослушано
                <i className={"fa-solid fa-check "+ styles.check}></i>
            </div>
            <div className={styles.dropVar + ' ' + styles.active} onClick={handleVarCLick}>
                Недавно добавленные
                <i className={"fa-solid fa-check "+ styles.check + ' ' + styles.activeCheck}></i>
            </div>
            <div className={styles.dropVar} onClick={handleVarCLick}>
                По алфавиту
                <i className={"fa-solid fa-check "+ styles.check}></i>
            </div>
            <div className={styles.dropVar} onClick={handleVarCLick}>
                По автору
                <i className={"fa-solid fa-check "+ styles.check}></i>
            </div>
        </div>
    );
};

export default DropDownMenu;