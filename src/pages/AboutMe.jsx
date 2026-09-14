import React from "react";
import { useTranslate } from "../context/LanguageContext";
import AboutMeImage from "../components/About Me/AboutMeImage";
import AboutMeImageVertical from "../components/About Me/AboutMeImageVertical";
import TopIcon from "../components/TopIcon";
import styles from "./aboutMe.module.css";

function AboutMe() {
  const t = useTranslate();
  const renderAchievement = ({ title, dates }) => (
    <li key={`${title}-${dates}`}>
      {title}
      <small className={styles.footnote}>
        {"\u00A0"}
        {dates}
      </small>
    </li>
  );

  return (
    <div className="page-container">
      <TopIcon image="smile" />

      <section className={styles.contentRowLeft}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("about.section1.header")}</h1>
          <div>
            <p className={styles.titleSubtext}>{t("about.section1.name")}</p>
            <p>{t("about.section1.description")}</p>
          </div>
          <div className={styles.listContainer}>
            <h2 className={styles.subTitle}>
              {t("about.section1.list_title")}
            </h2>
            <ul>
              <li>{t("about.section1.list1")}</li>
              <li>
                {t("about.section1.list2")}
                <small className={styles.footnote}>
                  {"\u00A0"}
                  {t("about.section1.list2_subtext")}
                </small>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.subTitle}>
              {t("about.section1.experience_title")}
            </h2>
            {t("about.section1.experience").map(({ role, dates }) => (
              <p key={`${role}-${dates}`}>
                {role}
                <small className={styles.footnote}>
                  {"\u00A0"}
                  {dates}
                </small>
              </p>
            ))}
          </div>
        </div>
        <AboutMeImage
          layout="Vertical"
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
              {[t("about.section2.list1_1"), t("about.section2.list1_2")].map(
                renderAchievement,
              )}
            </ul>
          </div>

          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>{t("about.section2.ex_group")}</h4>
            <ul>
              {[
                t("about.section2.list2_1"),
                t("about.section2.list2_2"),
                t("about.section2.list2_3"),
                t("about.section2.list2_4"),
                t("about.section2.list2_5"),
                t("about.section2.list2_6"),
                t("about.section2.list2_7"),
              ].map(renderAchievement)}
            </ul>
          </div>

          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>{t("about.section2.ex_other")}</h4>
            <ul>
              {[
                t("about.section2.list3_1"),
                t("about.section2.list3_2"),
                t("about.section2.list3_3"),
              ].map(renderAchievement)}
            </ul>
          </div>
        </div>
        <AboutMeImage
          layout="Horizontal"
          image1="https://cdn.veejablonska.com/aboutMeH1.avif"
          image2="https://cdn.veejablonska.com/aboutMeH2.avif"
        />
      </section>
    </div>
  );
}

export default AboutMe;
