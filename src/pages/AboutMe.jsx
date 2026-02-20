import React from "react";
import { useLanguage } from "../LanguageContext";
import AboutMeImage from "../components/aboutMe/AboutMeImage";
import AboutMeImageVertical from "../components/aboutMe/AboutMeImageVertical";
import image1 from "../assets/aboutMeImage1.png"
import image2 from "../assets/aboutMeImage2.png"
import image3 from "../assets/aboutMeImage3.png"
import image4 from "../assets/aboutMeImage4.png"
import "./aboutMe.css";

function AboutMe() {
  const language = useLanguage();

  const strings = {
  aboutMe: language === "pl" ? "O mnie" : "About Me",
  section1: {
    header: language === "pl" ? "Cześć!" : "Hello!",
    text0: language ==="pl" ? "Jestem Weronika Jabłońska" : "I'm Weronika Jabłońska",
    text1: language === "pl" 
      ? "Projektuję i fotografuję, poruszając się między różnymi stylami i formami wyrazu. Lubię eksperymentować, mieszać techniki i odkrywać nowe rozwiązania - zarówno w sztuce, jak i w codziennym procesie twórczym."
      : "A designer and photographer who navigates between different styles and forms of expression. I enjoy experimenting, mixing techniques, and exploring new solutions - both in art and in the everyday creative process.",
    text2: language === "pl"
      ? `Moim punktem wyjścia był rysunek i malarstwo, do którego często wracam, budując kompozycję i narrację obrazu. Jestem absolwentką Liceum Plastycznego w Kielcach, aktualnie kończę studia licencjackie z komunikacji wizualnej na UKEN w Krakowie.`
      : "My starting point was drawing and painting, which I often return to when building the composition and narrative of an image. I'm a graduate of the Fine Arts High School in Kielce, currently finishing my bachelor's degree in visual communication at UKEN in Krakow.",
    text3: language === "pl"
      ? `Od kilku lat pracuję jako trenerka grafiki komputerowej, ucząc dzieci i młodzież w\u00A0Gigantach Programowania i pomagając im stawiać pierwsze kroki w świecie projektowania. Pracuję także jako fotoreporterka na obozach młodzieżowych oraz wykonuję fotorelacje i dokumentacje wystaw na uczelni.`
      : "For several years, I've been working as a computer graphics trainer, teaching children and youth at Giganci Programowania and helping them take their first steps in the world of design. I also work as a photojournalist at youth camps and create photo reports and document exhibitions at the university.",
  },
  section2: {
    header: language === "pl" ? "Osiągnięcia" : "Achievements",
    text: {
      header1: language === "pl" ? "Wystawy:" : "Exhibitions:",
      list1_1: language === "pl"
        ? "“Ewolucja natury” Miejska Biblioteka Publiczna w Starachowicach, 2025"
        : "“Ewolucja natury” Municipal Public Library in Starachowice, 2025",
      list1_2: language === "pl"
        ? "“Światłocienie” Poczytalnia na dVoRcu w Kielcach, 2025"
        : "“Światłocienie” Public Library in the dVorzec in Kielce, 2025",
    },
  },
};

  return (
    <div className="content">
      {/* Section 1 - large container is flex-grow 3, small is flex-grow 2*/}
      <div className="content-row">
        <div className="text-container-large">
          <h1 className="title">{strings.section1.header}</h1>
          <p className="title-subtext">{strings.section1.text0}</p>
          <p>{strings.section1.text1}</p>
          <p>{strings.section1.text2}</p>
          <p>{strings.section1.text3}</p>
        </div>
        <AboutMeImage size="small" image1={image1} image2={image2} />
      </div>

      {/* Section 2 */}
      <div className="content-row">
        <div className="text-container-small">
          <h1>{strings.section2.header}</h1>
          <h3>{strings.section2.text.header1}</h3>
          <ul>
            <li>{strings.section2.text.list1_1}</li>
            <li>{strings.section2.text.list1_2}</li>
          </ul>
        </div>
        <AboutMeImageVertical size="large" image1={image3} image2={image4}/>
      </div>
    </div>
  );
}

export default AboutMe;
