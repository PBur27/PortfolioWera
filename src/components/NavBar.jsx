import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../LanguageContext";

function NavBar() {
  const styles = {
    container: {
      width: "100%",
      height: "12vh",
      paddingTop: "2vh",
      marginBottom: "9vh",
      display: "flex",
      flexDirection: "column",
      gap: '2em',
      alignItems: "center",
    },
    navContainer: {
      backgroundColor: "#2F2D2D",
      borderBottom: "0.1em solid #ffffff",
      height: "4rem",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  const language = useLanguage();
  const strings = {
    about: language === "pl" ? "o mnie" : "about me",
    projects: language === "pl" ? "projekty" : "projects",
    photography: language === "pl" ? "fotografia" : "photography",
    contact: language === "pl" ? "kontakt" : "contact",
  };

  const location = useLocation();
  console.log("Current path:", location.pathname);

  return (
    <div style={styles.container}>
      <Logo size="3em"/>
      <nav style={styles.navContainer}>
        <NavItem
          text={strings.about}
          href="/o-mnie"
          isScribble={location.pathname === "/o-mnie"}
        />
        <NavItem
          text={strings.projects}
          href="/projekty"
          isScribble={location.pathname === "/projekty"}
        />
        <NavItem
          text={strings.photography}
          href="/fotografie"
          isScribble={location.pathname === "/fotografie"}
        />
        <NavItem
          text={strings.contact}
          href="/kontakt"
          isScribble={location.pathname === "/kontakt"}
        />
        <LanguageSwitch />
      </nav>
    </div>
  );
}

export default NavBar;
