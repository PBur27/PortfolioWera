import React from 'react'
import burgerButtonImg from '../assets/BurgerButton.avif';
import styles from "./burgerButton.module.css";

function BurgerButton({ onClick, className }) {
  return (
    <button type="button" className={`${styles.burgerButton} ${className || ""}`} onClick={onClick} aria-label="Open menu">
      <img src={burgerButtonImg} alt="Burger Button" />
    </button>
  )
}

export default BurgerButton