// components/Header.jsx
import React from 'react';
import countyLogo from '../assets/react.svg'; // adjust path as needed

function Header() {
  return (
    <header style={styles.header}>
      <img src={countyLogo} alt="County Logo" style={styles.logo} />
      <h1 style={styles.title}>Machako County</h1>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#021672ff',
    borderBottom: '1px solid #ccc'
  },
  logo: {
    height: '50px',
    marginRight: '1rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)'
  }
};

export default Header;