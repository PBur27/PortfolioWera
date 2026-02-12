import React from 'react';
import logoVee from "../assets/logoVee.svg";

function Logo({size = "3em"}) {
  const styles = {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    image: {
      height: size,
      objectFit: 'contain',
    }
  };

  return (
    <div style={styles.container} onClick={() => window.location.href = '/'}>
      <img src={logoVee} alt="Vee Logo" style={styles.image} />
    </div>
  );
};

export default Logo;