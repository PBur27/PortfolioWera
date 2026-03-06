import React from "react";
import { useT } from "../LanguageContext"; // Import your specific hook
import AboutMeImage from "../components/aboutMe/AboutMeImage";
import AboutMeImageVertical from "../components/aboutMe/AboutMeImageVertical";
import smile from "../assets/aboutMeSmile.png";
import image1 from "../assets/aboutMeImage1.png";
import image2 from "../assets/aboutMeImage2.png";
import image3 from "../assets/aboutMeImage3.png";
import image4 from "../assets/aboutMeImage4.png";
import "./pages.css";

function AboutMe() {
  const t = useT(); // Initialize the translation function

  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" alt="Smile" />
      </div>
      <div className="content">
        {/* Section 1 */}
        <div className="content-row">
          <div className="text-container-large">
            <h1 className="title">{t('about.section1.header')}</h1>
            <p className="title-subtext">{t('about.section1.name')}</p>
            <p>{t('about.section1.text1')}</p>
            <p>{t('about.section1.text2')}</p>
            <p>{t('about.section1.text3')}</p>
          </div>
          <AboutMeImage size="small" image1={image1} image2={image2} />
        </div>

        {/* Section 2 */}
        <div className="content-row">
          <div className="text-container-small">
            <h1 className="title">{t('about.section2.header')}</h1>
            <h3 className="title-subtext">{t('about.section2.ex_individual')}</h3>
            <ul>
              <li>{t('about.section2.list1_1')}</li>
              <li>{t('about.section2.list1_2')}</li>
            </ul>
            <h3 className="title-subtext">{t('about.section2.ex_group')}</h3>
            <ul>
              <li>{t('about.section2.list2_1')}</li>
              <li>{t('about.section2.list2_2')}</li>
              <li>{t('about.section2.list2_3')}</li>
            </ul>
            <h3 className="title-subtext">{t('about.section2.ex_other')}</h3>
            <ul>
              <li>{t('about.section2.list3_1')}</li>
              <li>{t('about.section2.list3_2')}</li>
              <li>{t('about.section2.list3_3')}</li>
            </ul>
          </div>
          <AboutMeImageVertical size="large" image1={image3} image2={image4} />
        </div>
      </div>
    </>
  );
}

export default AboutMe;