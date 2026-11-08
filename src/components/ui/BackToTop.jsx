import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslate } from "../../context/LanguageContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./backToTop.module.css";

const SHOW_AFTER_SCROLL = 200;

function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > SHOW_AFTER_SCROLL;
  const t = useTranslate();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.backToTop}
          type="button"
          aria-label={t("ui.back_to_top")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileTap={{ scale: 0.92 }}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;