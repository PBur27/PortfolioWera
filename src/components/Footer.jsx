import React from "react";
import Logo from "./Logo";

const styles = {
  footerRow: {
    height: "20vh",
    display: "flex",
    flexDirection: "row",
    padding: "5vh 10vw",
    justifyContent: "space-between",
    backgroundColor: "#1B1919",
  },
  footerContainerLeft: {
    flex: '0 0 20%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  footerContainerRight: {
    flex: '0 0 20%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  footerText:{
    margin: '2px',
  },
  footerTextBold:{
    margin: '2px',
    fontWeight: 'bold',
  },
};

function Footer() {
  return (
    <div style={styles.footerRow}>
      <div style={styles.footerContainerLeft}>
        <p style={styles.footerTextBold}>social media</p>
        <p style={styles.footerText}>instagram: vee_graficzka</p>
        <p style={styles.footerText}>tiktok: vee_graficzka</p>
      </div>
      <div style={styles.footerContainerRight}>
        <Logo size="2em"/>
        <p style={styles.footerTextBold}>Weronika Jabłońska</p>
        <p style={styles.footerText}>grafika & fotografia</p>
      </div>
    </div>
  );
}

export default Footer;
