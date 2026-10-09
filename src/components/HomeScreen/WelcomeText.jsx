import styles from "./welcomeText.module.css";
import { useTranslate } from "../../context/LanguageContext";
function WelcomeText() {
  const t = useTranslate();
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeDynamicWrapper}>
        <h2 className={styles.name}>{t("home.welcome.name")}</h2>
        <h1 className={styles.title}>{t("home.welcome.portfolio")}</h1>
        <h4 className={styles.subtitle}>{t("home.welcome.subtitle")}</h4>
      </div>
    </div>
  );
}

export default WelcomeText;
