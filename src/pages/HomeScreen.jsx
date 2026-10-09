import React from "react";
import WelcomeText from "../components/HomeScreen/WelcomeText";
import HomeScreenContent from "../components/HomeScreen/HomeScreenContent";

function HomeScreen() {
  return (
    <div className="page-container">
      <WelcomeText />
      <HomeScreenContent />
    </div>
  );
}

export default HomeScreen;
