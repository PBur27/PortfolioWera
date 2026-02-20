import React, { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MainPageGallery from "../components/mainPage/MainPageGallery";
import { useLocation } from "react-router";

function HomeScreen() {
  const location = useLocation();
  
  const shouldLoadingBeDisplayed = location.state?.skipLoadingScreen ?? false;
  const [skipLoading,setSkipLoading]= useState(shouldLoadingBeDisplayed) 


  return (
    <>
      {!skipLoading ? <LoadingScreen setSkipLoading={setSkipLoading} /> : null}
      <MainPageGallery />
    </>
  );
}

export default HomeScreen;
