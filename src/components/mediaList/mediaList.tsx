import React from 'react';
import styles from './mediaList.module.scss'

type media={
    photo: string;
    name: string;
    type: string;
}
const MediaList = () => {
    const mediaListArr: media[] = [{photo: "/public/photos/morgen.jpg", name: "Моргенштерн", type:"Исполнитель"},
        {photo: "/public/photos/2.jpg", name: "Моргенштерн", type:"Исполнитель"},
        {photo: "/public/photos/3.jpg", name: "Моргенштерн", type:"Исполнитель"}]

    function varClickHandler(event){
        const allVars=document.querySelectorAll('.'+styles.varBlock);
        allVars.forEach((elem)=>{
            elem.classList.remove(styles.active);
            if(elem.contains(event.target)){
                elem.classList.add(styles.active)
            }
        })
    }

    return (
        <div>
            {
                mediaListArr.map((elem:media)=>(
                    <div className={styles.varBlock} onClick={varClickHandler}>
                        <div className={styles.varPhoto}>
                            <img src={elem.photo}/>
                        </div>
                        <div className={styles.varDesc}>
                            <div className={styles.varName}>
                                {elem.name}
                            </div>
                            <div className={styles.varType}>
                                {elem.type}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MediaList;