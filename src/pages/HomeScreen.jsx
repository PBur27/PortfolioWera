import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import MainPageGallery from "../components/mainPage/MainPageGallery";
import { useLocation } from "react-router";

function HomeScreen() {
  const location = useLocation();
  
  const skipLoadingScreen = location.state?.skipLoadingScreen ?? false;

  return (
    <>
      {!skipLoadingScreen ? <LoadingScreen /> : null}
      <MainPageGallery />
    </>
  );
}

export default HomeScreen;
