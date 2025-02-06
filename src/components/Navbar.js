import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#ffffff',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ margin: 0, color: '#333', fontWeight: 'bold', fontSize: '1.5rem' }}>Zidio Task Manager</h2>
      <div>
        <a href="https://youtu.be/xvFZjo5PgG0?si=BlUFShx788dlXufv" style={{ color: '#333', marginRight: '16px', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Home</a>
        <a href="#" style={{ color: '#333', marginRight: '16px', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Features</a>
        <a href="#" style={{ color: '#333', marginRight: '16px', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Pricing</a>
        <a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
