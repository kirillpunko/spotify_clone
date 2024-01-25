import React from 'react';
import styles from "./leftSideMenu.module.scss"
import MainSearchMenu from "../mainSearchMenu/mainSearchMenu";
import MediaLibrary from "../mediaLibrary/mediaLibrary";

function LeftSideMenu() {
  return (
    <div className={styles.fullBlock}>
      <MainSearchMenu/>
      <MediaLibrary/>
    </div>
  );
}

export default LeftSideMenu;
