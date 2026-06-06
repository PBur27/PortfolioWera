import React, { useState } from "react";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import { useLanguage } from "../LanguageContext";
import styles from "./navBarMobile.module.css";
import LanguageSwitch from "./LanguageSwitch";

function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const language = useLanguage();

  const strings = {
    about: language === "pl" ? "o mnie" : "about me",
    projects: language === "pl" ? "projekty" : "projects",
    photography: language === "pl" ? "fotografia" : "photos",
    contact: language === "pl" ? "kontakt" : "contact",
  };

  const closeMenu = () => setMenuOpen(false);
  const closeMenuWithDelay = () => {
    setTimeout(() => setMenuOpen(false), 2000);
  };
  const openMenu = () => setMenuOpen(true);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoWrapper}>
          <Logo size="60px" />
        </div>
        <BurgerButton onClick={openMenu} />
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : styles.overlayClosed}`}
      >
        <div
          className={`${styles.modalPanel} ${menuOpen ? styles.modalPanelOpen : styles.modalPanelClosed}`}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className={styles.modalMenu}>
            <NavItem
              text={strings.about}
              href="/about-me"
              isScribble={location.pathname === "/about-me"}
              className={styles.modalNavItem}
              onClick={closeMenuWithDelay}
            />
            <NavItem
              text={strings.projects}
              href="/projects"
              isScribble={location.pathname === "/projects"}
              className={styles.modalNavItem}
              onClick={closeMenuWithDelay}
            />
            <NavItem
              text={strings.photography}
              href="/photography"
              isScribble={location.pathname === "/photography"}
              className={styles.modalNavItem}
              onClick={closeMenuWithDelay}
            />
            <NavItem
              text={strings.contact}
              href="/contacts"
              isScribble={location.pathname === "/contacts"}
              className={styles.modalNavItem}
              onClick={closeMenuWithDelay}
            />
            <NavItem
              text="instagram"
              href="https://www.instagram.com/vee_graficzka/"
              isScribble={false}
              className={styles.modalNavItem}
              onClick={closeMenu}
            />
            <LanguageSwitch className={styles.languageSwitch} />
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;
