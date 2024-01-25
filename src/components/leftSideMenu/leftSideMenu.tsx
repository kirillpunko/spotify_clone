import React from 'react';
import MainSearchMenu from "../mainSearchMenu/mainSearchMenu";
import styles from "./leftSideMenu.module.scss"
function LeftSideMenu() {
  return (
    <div className={styles.fullBlock}>
      <MainSearchMenu/>
    </div>
  );
}

export default LeftSideMenu;
