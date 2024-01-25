import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import LateralButton from './components/LateralButtons.js';
import MailList from './components/MailList.js';

const App = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenHeight);
    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{width: '20%', height: `${(screenHeight - 56)}px`, backgroundColor: '#05061a' }}>
          <LateralButton />
        </div>
        <div style={{width: '80%', height: `${(screenHeight - 56)}px`, backgroundColor: '#052122', overflowY: 'auto' }}>
          <MailList />
        </div>
      </div>
    </>
  );
};

export default App;

