import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import AboutMeImageTop from "../components/aboutMe/AboutMeImageTop";
import AboutMeImageBottom from "../components/aboutMe/AboutMeImageBottom";
import "./aboutMe.css";


function AboutMe() {
  const language = useLanguage();

  const strings = {
    aboutMe: language === "pl" ? "O mnie" : "About Me",
    section1: {
      header: language === "pl" ? "Cześć!" : "Hello!",
      text:
        language === "pl"
          ? "Jestem Weronika Jabłońska,projektuję i fotografuję, poruszając się między różnymi stylami i formami wyrazu. Lubię eksperymentować, mieszać techniki i odkrywać nowe rozwiązania - zarówno w sztuce, jak i w codziennym procesie twórczym. Moim punktem wyjścia był rysunek i malarstwo, do którego często wracam, budując kompozycję i narrację obrazu. Jestem absolwentką Liceum Plastycznego w Kielcach, aktualnie kończę studia licencjackie z komunikacji wizualnej na UKEN w Krakowie.Od kilku lat pracuję jako trenerka grafiki komputerowej, ucząc dzieci i młodzież w Gigantach Programowania i pomagając im stawiać pierwsze kroki w świecie projektowania. Pracuję także jako fotoreporterka na obozach młodzieżowych oraz wykonuję fotorelacje i dokumentacje wystaw na uczelni."
          : "I'm Weronika Jabłońska, a designer and photographer who navigates between different styles and forms of expression. I enjoy experimenting, mixing techniques, and exploring new solutions - both in art and in the everyday creative process. My starting point was drawing and painting, which I often return to when building the composition and narrative of an image. I'm a graduate of the Fine Arts High School in Kielce, currently finishing my bachelor's degree in visual communication at UKEN in Krakow. For several years, I've been working as a computer graphics trainer, teaching children and youth at Giganci Programowania and helping them take their first steps in the world of design. I also work as a photojournalist at youth camps and create photo reports and document exhibitions at the university.",
    },
    section2:{
      header: language === "pl" ? "Osiągnięcia" : "Achievements",
      text: {
        header1: language === "pl" ? "Wystawy:" : "Exhibitions:",
        list1_1: language === "pl" ? "“Ewolucja natury” Miejska Biblioteka Publiczna w Starachowicach, 2025" : "“Ewolucja natury” Municipal Public Library in Starachowice, 2025",
        list1_2: language === "pl" ? "“Światłocienie” Poczytalnia na dVoRcu w Kielcach, 2025" : "“Światłocienie” Public Library in the dVorzec in Kielce, 2025",
      }
    },
  };

  const styles = {
    content: {
      display: "flex",
      flex:1,
      width:'90%',
      flexDirection: "column",
      margin:'auto',
      gap: "1em",
      boxSizing: 'border-box',
    },
    contentRow: {
      display: "flex",
      flex: '1 2 10vh',
      flexDirection: "row",
      width:'100%',
    },
    contentCol: {
      display: "flex",
      flexDirection: "column",
    },
    textContainer: {
      flex: 2,
 
    },
    imageContainer: {
      flex: 1,
    },
    title: {
      marginBottom: "1rem",
    },
  };

  const breakpoint = 1000;
  const [isPhone, setIsPhone] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return (
    <>
      {!isPhone ? (
        
          <div style={styles.content}>
            <div style={styles.contentRow}>
              <div style={styles.textContainer}>
                <h1>{strings.section1.header}</h1>
                <p>{strings.section1.text}</p>
              </div>
              <div style={styles.imageContainer}>
                <AboutMeImageTop />
              </div>
            </div>
            <div style={styles.contentRow}>
              <div style={styles.textContainer}>

              </div>
            </div>
            <div style={styles.contentRow}>
              <div style={styles.imageContainer}>

              </div>
            </div>
          </div>
        
      ) : (
        <div>
          <div style={styles.content}>
            <div style={{flex:'1 1 25%'}}>
              <div >
                <h1>{strings.section1.header}</h1>
                <p>{strings.section1.text}</p>
              </div>
            </div>
            <div style={{flex:'1 1 300px'}}>
                <AboutMeImageTop />
            </div>
            <div style={{flex:'1 1 25%'}}>
              <div >
                <h1>{strings.section2.header}</h1>
                <p>{strings.section1.text}</p>
              </div>
            </div>
            <div style={{flex:'1 1 300px'}}>
                <AboutMeImageBottom />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;
