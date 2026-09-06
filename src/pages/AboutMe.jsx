import React from "react";
import { useTranslate } from "../context/LanguageContext";
import AboutMeImage from "../components/About Me/AboutMeImage";
import AboutMeImageVertical from "../components/About Me/AboutMeImageVertical";
import TopIcon from "../components/TopIcon";
import styles from "./aboutMe.module.css";

function AboutMe() {
  const t = useTranslate();

  return (
    <div className="page-container">
      <TopIcon image="smile" />

      <section className={styles.contentRowLeft}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("about.section1.header")}</h1>
          <p className={styles.titleSubtext}>{t("about.section1.name")}</p>
          <p>{t("about.section1.text1")}</p>
          <p>{t("about.section1.text2")}</p>
          <p>{t("about.section1.text3")}</p>
        </div>
        <AboutMeImage
          size="small"
          image1="https://cdn.veejablonska.com/aboutMeV1.avif"
          image2="https://cdn.veejablonska.com/aboutMeV2.avif"
        />
      </section>

      <section className={styles.contentRowRight}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("about.section2.header")}</h1>

          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>
              {t("about.section2.ex_individual")}
            </h4>
            <ul>
              <li>{t("about.section2.list1_1")}</li>
              <li>{t("about.section2.list1_2")}</li>
            </ul>
          </div>

          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>{t("about.section2.ex_group")}</h4>
            <ul>
              <li>{t("about.section2.list2_1")}</li>
              <li>{t("about.section2.list2_2")}</li>
              <li>{t("about.section2.list2_3")}</li>
            </ul>
          </div>

          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>{t("about.section2.ex_other")}</h4>
            <ul>
              <li>{t("about.section2.list3_1")}</li>
              <li>{t("about.section2.list3_2")}</li>
              <li>{t("about.section2.list3_3")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
