import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import { useTranslate } from "../context/LanguageContext";
import homeStyles from "../components/HomeScreen/homeScreenContent.module.css";
import styles from "./errorPage.module.css";

function ErrorPage({ notFound = false }) {
  const error = useRouteError();
  const t = useTranslate();

  const isNotFound =
    notFound || (isRouteErrorResponse(error) && error.status === 404);

  return (
    <main className={styles.errorPage}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t(isNotFound ? "error.not_found.title" : "error.title")}
        </h1>
        <p>
          {t(isNotFound ? "error.not_found.description" : "error.description")}
        </p>
        <Link className={homeStyles.button} to="/">
          {t("error.back_home")}
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;