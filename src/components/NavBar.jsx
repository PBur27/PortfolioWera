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
            href="/about-me"
            isScribble={location.pathname === "/about-me"}
          />
          <NavItem
            text={strings.projects}
            href="/projects"
            isScribble={location.pathname === "/projects"}
          />
          <NavItem
            text={strings.photography}
            href="/photography"
            isScribble={location.pathname === "/photography"}
          />
          <NavItem
            text={strings.contact}
            href="/contacts"
            isScribble={location.pathname === "/contacts"}
          />
          <NavItem
            text={'instagram'}
            href="https://www.instagram.com/vee_graficzka/"
            isScribble={false}
          />
          <LanguageSwitch />

      </Navbar>
    </div>
  );
}

export default NavBar;
