import React, {useRef} from 'react';
import styles from "./sortMediaTags.module.scss"

const SortMediaLibraryTags = () => {
    const mediaTagsArr = ["Исполнители", "Треки", "Альбомы"]
    const crossTags=useRef(null);

    function clickTagHandler(event){
        if(!event.target.classList.contains(styles.active)){
            const arrTags= document.querySelectorAll('.'+styles.sortTag);
            arrTags.forEach((elem)=>{
                elem.classList.add(styles.hide);
            })
            event.target.classList.remove(styles.hide);
            event.target.classList.add(styles.active);
            crossTags.current.classList.add(styles.show);
        }
        else
            crossClickHandler();
    }

    function crossClickHandler(){
        const arrTags= document.querySelectorAll('.'+styles.sortTag);
        arrTags.forEach((elem)=>{
            elem.classList.remove(styles.hide);
            elem.classList.remove(styles.active);
            crossTags.current.classList.remove(styles.show)
        })
    }

    return (
        <div className={styles.sortBlock}>
            <div className={styles.crossBtn} ref={crossTags} onClick={crossClickHandler}></div>
            {mediaTagsArr.map((data:string)=>(
                <div key={data} className={styles.sortTag} onClick={clickTagHandler}>
                    {data}
                </div>
            ))}
        </div>
    );
};

export default SortMediaLibraryTags;