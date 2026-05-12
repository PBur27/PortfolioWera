import React from "react";
import { useT } from "../LanguageContext";
import AboutMeImage from "../components/About Me/AboutMeImage";
import AboutMeImageVertical from "../components/About Me/AboutMeImageVertical";
import AboutMeSection from "../components/About Me/AboutMeSection";
import TopIcon from '../components/TopIcon';
import "./aboutMe.css";

function AboutMe() {
  const t = useT();

  return (
    <>
      <TopIcon image={'smile'}/>
      <div className="content">
        
        <AboutMeSection 
          title={t('about.section1.header')}
          subtext={<p>{t('about.section1.name')}</p>}
          imageComponent={
            <AboutMeImage 
              size="small" 
              image1="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeV1.avif" 
              image2='https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeV2.avif' 
            />
          }
        >
          <p>{t('about.section1.text1')}</p>
          <p>{t('about.section1.text2')}</p>
          <p>{t('about.section1.text3')}</p>
        </AboutMeSection>

        <AboutMeSection 
          title={t('about.section2.header')}
          textContainerClass="text-container-small"
          imageComponent={
            <AboutMeImageVertical 
              size="large" 
              image1="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeH1.avif" 
              image2='https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/aboutMeH2.avif' 
            />
          }
        >
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
        </AboutMeSection>

      </div>
    </>
  );
}

export default AboutMe;