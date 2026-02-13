import React from "react";
import logoVee from "../assets/logoVee.svg";
import { useNavigate } from "react-router";

function Logo({ size = "3em" }) {
  const styles = {
    container: {
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    image: {
      height: size,
      objectFit: "contain",
    },
  };

  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/", { state: { skipLoadingScreen: true } })}
    >
      <img src={logoVee} alt="Vee Logo" style={{ height: size }} />
    </div>
  );
}

export default Logo;
