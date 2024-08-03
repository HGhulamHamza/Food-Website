import React from 'react';

const Icons = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    },
    icon: {
      width: '30px',
      height: '30px',
      borderRadius: '12px',
    },
   p:{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',  
   },
   span:{
     color:'crimson', 
     marginLeft:'5px'     
   }
  };

  return (
    <div>
      <div style={styles.container}>
        <img src="src/assets/fb.png" style={styles.icon} alt="Facebook" />
        <img src="src/assets/insta.jpg" style={styles.icon} alt="Instagram" />
        <img src="src/assets/twitter.png" style={styles.icon} alt="Twitter" />
      </div>
      <p style={styles.p}>All rights reserved.Designed by <span style={styles.span}>Ghulam Hamza</span></p>
    </div>
  );
};

export default Icons;
