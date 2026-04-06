import React from "react";
import { useT } from "../LanguageContext"; // Import your specific hook
import AboutMeImage from "../components/aboutMe/AboutMeImage";
import AboutMeImageVertical from "../components/aboutMe/AboutMeImageVertical";
import "./pages.css";

function AboutMe() {
  const t = useT(); // Initialize the translation function

  return (
    <>
      <div className="top-image-container">
        <img src='https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/smile.avif' className="top-image" alt="Smile" />
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
          <AboutMeImage size="small" image1="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeV1.avif" image2='https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeV2.avif' />
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
          <AboutMeImageVertical size="large" image1="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeH1.avif" image2='https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeH2.avif' />
        </div>
      </div>
    </>
  );
}

export default AboutMe;