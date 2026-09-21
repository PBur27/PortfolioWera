import React from "react";
import { motion } from "motion/react";
import burgerButtonImg from "../../assets/BurgerButton.avif";
import styles from "./burgerButton.module.css";

function BurgerButton({ onClick, className, ariaLabel = "Open menu" }) {
  return (
    <motion.button
      type="button"
      className={`${styles.burgerButton} ${className || ""}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      <img src={burgerButtonImg} alt="Burger Button" />
    </motion.button>
  );
}

export default BurgerButton;
