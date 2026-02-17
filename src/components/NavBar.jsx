import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { useLocation } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../LanguageContext";
import { Container, Navbar } from "react-bootstrap";
import "./componentStyles.css";



function NavBar() {
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
    <div className="navbarContainer">
        <Logo size="3em" />
      <Navbar className="navbarRow">
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
          <NavItem
            text={'Instagram'}
            href="https://www.instagram.com/vee_graficzka/"
            isScribble={false}
          />
          <LanguageSwitch />

      </Navbar>
    </div>
  );
}

export default NavBar;
