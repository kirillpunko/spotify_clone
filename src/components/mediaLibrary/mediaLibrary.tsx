import React from 'react';
import styles from "./mediaLibrary.module.scss"
import SortMediaLibraryTags from "../SortMediaLibraryTags/sortMediaLibraryTags";
import MediaLibrarySearchLine from "../mediaLibrarySearchLine/mediaLibrarySearchLine";
const MediaLibrary = () => {
    return (
        <div className={styles.mediaLibraryBlock}>
            <div className={styles.mediaLibraryTitle}>
                <div className={styles.mediaLibrary}>
                    <i className="fa-solid fa-box-archive"></i>
                    <div>Моя медиатека</div>
                </div>
                <div className={styles.iconBlock}>
                    <i className="fa-solid fa-plus"><div className={styles.backgroundHover}></div></i>
                    <i className="fa-solid fa-arrow-right"><div className={styles.backgroundHover}></div></i>
                </div>
            </div>
            <SortMediaLibraryTags/>
            <MediaLibrarySearchLine/>
        </div>
    );
};

export default MediaLibrary;