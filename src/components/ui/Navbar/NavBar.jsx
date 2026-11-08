import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import BurgerButton from "../BurgerButton";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslate } from "../../../context/LanguageContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import styles from "./navBar.module.css";

const DESKTOP_COLLAPSE_THRESHOLD = 200;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const translate = useTranslate();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const scrollY = useScrollPosition();

  const isScrolledPast = !isMobile && scrollY > DESKTOP_COLLAPSE_THRESHOLD;

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "clip";
      document.body.style.overflow = "clip";
      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      };
    }
  }, [menuOpen]);

  const handleNavItemClick = () => setMenuOpen(false);

  const navItems = [
    { text: translate("navbar.about"), href: "/about-me" },
    { text: translate("navbar.projects"), href: "/projects" },
    { text: translate("navbar.photography"), href: "/photography" },
    { text: translate("navbar.contact"), href: "/contacts" },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map(({ text, href }) => (
        <NavItem
          key={href}
          text={text}
          href={href}
          isScribble={location.pathname === href}
          onClick={handleNavItemClick}
        />
      ))}
      <NavItem
        text={translate("navbar.instagram")}
        href="https://www.instagram.com/vee_graficzka/"
        isScribble={false}
        onClick={handleNavItemClick}
      />
    </>
  );

  if (!isMobile) {
    return (
      <>
        <div className={styles.desktopNavbar}>
          <div className={styles.navbarLogoContainer}>
            {!isScrolledPast && (
              <motion.div
                layoutId="vee-logo"
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              >
                <Logo size="60px" />
              </motion.div>
            )}
          </div>
          <div className={styles.navbarRow}>
            {renderNavItems()}
            <LanguageSwitch />
          </div>
        </div>

        {isScrolledPast && (
          <motion.div
            layoutId="vee-logo"
            className={styles.stickyLogo}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            <Logo size="24px" disableHover />
          </motion.div>
        )}
      </>
    );
  }

  return (
    <div className={styles.mobileNavbar}>
      <div className={styles.mobileHeader}>
        <div className={styles.logoWrapper}>
          <Logo size="30px" />
        </div>
        <BurgerButton
          onClick={() => setMenuOpen(true)}
          ariaLabel={translate("navbar.openMenu")}
        />
      </div>
      <AnimatePresence>
        {menuOpen &&
          createPortal(
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                className={styles.modalPanel}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setMenuOpen(false)}
                  aria-label={translate("navbar.closeMenu")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="30" y1="10" x2="10" y2="30" />
                    <line x1="10" y1="10" x2="30" y2="30" />
                  </svg>
                </motion.button>
                <nav className={styles.modalMenu}>
                  {renderNavItems()}
                  <LanguageSwitch />
                </nav>
              </motion.div>
            </motion.div>,
            document.body,
          )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;