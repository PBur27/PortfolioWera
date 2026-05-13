import React from "react";
import Logo from "./Logo";
import styles from "./componentStyles.module.css";
import { Container } from "react-bootstrap";
import { useT } from "../LanguageContext";

function Footer() {
  const t = useT();
  return (
    <div className={styles.footerContainer}>
    
    <footer className={styles.footerRow}>
      <Container className={styles.footerContainerLeft}>
        <p className={`${styles.footerText} ${styles.boldText}`}>social media</p>
        <p className={styles.footerText}>instagram: vee_graficzka</p>
        <p className={styles.footerText}>tiktok: veejablonska</p>
      </Container>
      
      <Container className={styles.footerContainerRight}>
        <Logo size="1.2rem" />
        <p className={`${styles.footerText} ${styles.boldText}`}>Weronika Jabłońska</p>
        <p className={styles.footerText}>{t('footer.description')}</p>
        
      </Container>
    </footer>
      <p className={styles.footerBottomText}>{t('footer.copyright')}</p>
    </div>
  );
}

export default Footer;