import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import BurgerButton from "../BurgerButton";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslate } from "../../../context/LanguageContext";
import styles from "./navBar.module.css";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const translate = useTranslate();
  const isMobile = useMediaQuery("(max-width: 900px)");

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
  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

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

  const motionVariants = {
    mobile: {
      modalPanel: {
        closed: {
          x: "100%",
          transition: { duration: 0.3, ease: "easeInOut" },
        },
        open: {
          x: "0%",
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      },
    },
  };

  if (!isMobile) {
    return (
      <div className={styles.desktopNavbar}>
        <div className={styles.navbarLogoContainer}>
          <Logo size="60px" />
        </div>
        <div className={styles.navbarRow}>
          {renderNavItems()}
          <LanguageSwitch />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mobileNavbar}>
      <div className={styles.mobileHeader}>
        <div className={styles.logoWrapper}>
          <Logo size="60px" />
        </div>
        <BurgerButton
          onClick={() => setMenuOpen(true)}
          ariaLabel={translate("navbar.openMenu")}
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className={styles.modalPanel}
              initial="closed"
              animate="open"
              exit="closed"
              variants={motionVariants.mobile.modalPanel}
              onClick={(event) => event.stopPropagation()}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
