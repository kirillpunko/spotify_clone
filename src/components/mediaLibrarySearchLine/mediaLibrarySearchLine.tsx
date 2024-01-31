import React, {useRef} from 'react';
import styles from "./mediaLibrarySearchLine.module.scss"
import DropDownMenu from "../drop-down-menu/drop-down-menu";
import {ownerDocument} from "@mui/material";


const MediaLibrarySearchLine = () => {

    const inputField = useRef(null)
    const crossField = useRef(null);
    const searchTypeField = useRef(null);

    function openCloseClickHandler(){
        inputField.current.classList.remove(styles.hide);
        crossField.current.classList.add(styles.hide);
        const str=searchTypeField.current.innerHTML;
        searchTypeField.current.textContent = str.slice(0,7)+"...";
        const input= inputField.current.querySelector('input');
        input.focus();
    }

    function blurInputHandler(){
        inputField.current.classList.add(styles.hide);
        crossField.current.classList.remove(styles.hide);
        searchTypeField.current.textContent = "Недавно добавленные";
    }

    function sortTableHandler(){
        const dropDown = document.getElementById('dropDownMenu');
        dropDown.classList.toggle('show');
    }

    return (
        <div className={styles.searchLineBlock}>
            <div className={styles.searchField} onClick={openCloseClickHandler} ref={crossField}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={styles.inputBlock+" "+styles.hide} ref={inputField}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type={"text"} className={styles.inputSearch} placeholder="Искать в медиатеке" onBlur={blurInputHandler}/>
            </div>
            <div className={styles.searchTypeField} onClick={sortTableHandler} id='searchTypeField'>
                <span className={styles.searchText} ref={searchTypeField}>
                    Недавно добавленные
                </span>
                <i className="fa-solid fa-list-ul"></i>
            </div>
            <DropDownMenu/>
        </div>
    );
};

export default MediaLibrarySearchLine;