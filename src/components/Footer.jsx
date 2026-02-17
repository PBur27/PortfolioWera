import React from "react";
import Logo from "./Logo";
import "./componentStyles.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer-container">
    
    <footer className="footer-row">
      <Container className="footer-container-left">
        <p className="footer-text bold">social media</p>
        <p className="footer-text">instagram: vee_graficzka</p>
        <p className="footer-text">tiktok: veejablonska</p>
      </Container>
      
      <Container className="footer-container-right">
        <Logo size="1em" className="m-2"/>
        <p className="footer-text bold">Weronika Jabłońska</p>
        <p className="footer-text">grafika & fotografia</p>
        
      </Container>
    </footer>
      <p className="footer-bottom-text">Wszelkie prawa zastrzeżone ©WeronikaVeeJabłońska 2026</p>
    </div>
  );
}

export default Footer;