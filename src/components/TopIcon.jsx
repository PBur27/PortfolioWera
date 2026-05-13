import React from 'react'
import styles from './topIcon.module.css'

function TopIcon({image}) {

  return (
    <div className={styles.topIconContainer}>
        <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${image}.avif`} className={styles.topImage} alt="Smile" />
      </div>
  )
}

export default TopIcon