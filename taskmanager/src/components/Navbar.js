

import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav style={{ backgroundColor: '#333', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Task Manager</h2>
        <div>
          <a href="#" style={{ color: 'white', marginRight: '16px', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', marginRight: '16px', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
