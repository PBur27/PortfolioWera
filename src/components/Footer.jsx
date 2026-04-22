import React from "react";
import Logo from "./Logo";
import "./componentStyles.css";
import { Container } from "react-bootstrap";
import { useT } from "../LanguageContext";

function Footer() {
  const t = useT();
  return (
    <div className="footer-container">
    
    <footer className="footer-row">
      <Container className="footer-container-left">
        <p className="footer-text bold">social media</p>
        <p className="footer-text">instagram: vee_graficzka</p>
        <p className="footer-text">tiktok: veejablonska</p>
      </Container>
      
      <Container className="footer-container-right">
        <Logo size="1.2rem" />
        <p className="footer-text bold">Weronika Jabłońska</p>
        <p className="footer-text">{t('footer.description')}</p>
        
      </Container>
    </footer>
      <p className="footer-bottom-text">{t('footer.copyright')}</p>
    </div>
  );
}

export default Footer;