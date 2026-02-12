import React from 'react';
import scribbleBackground from '../assets/scribbleBackground.png';

function NavItem({ text, href = "#", isScribble = false }){
  const styles = {
    link: {
      display: 'flex',
      flex: 1,
      textDecoration: 'none',
      cursor: 'pointer',
      color: isScribble ? '#2F2D2D' : '#ffffff', 
      
      alignItems: 'center',
      justifyContent: 'center',
      
      
      height: '4em',
      

      backgroundImage: isScribble ? `url(${scribbleBackground})` : 'none',
      backgroundSize: '110% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      

    },
    textSpan: {
       position: 'relative',
       zIndex: 1,
       fontWeight: isScribble ? 800 : 600,
       fontSize: '1.05em',
    }
  };

  return (
    <a href={href} style={styles.link}>
      <span style={styles.textSpan}>{text}</span>
    </a>
  );
};

export default NavItem;