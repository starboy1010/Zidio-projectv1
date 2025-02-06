import React from 'react';
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <>
    <Navbar/>
    
    <div style={{ minHeight: '100vh',backgroundColor: '#1a1a1a', color: 'white', padding: '16px' }}>
      <p style={{ fontSize: '1.125rem', color: '#b3b3b3' }}>
        Organize your tasks efficiently and boost productivity.
      </p>
    </div>
            </>
  );
}

export default HomePage;