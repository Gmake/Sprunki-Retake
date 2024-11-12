import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.brandLogo}>
          Sprunkiretake
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="#hero" className={styles.navLink}>
            Home
          </Link>
          <Link href="#features" className={styles.navLink}>
            Features
          </Link>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#gameplay" className={styles.navLink}>
            How to Play
          </Link>
          <Link href="#phases" className={styles.navLink}>
            Phases
          </Link>
          <Link href="#community" className={styles.navLink}>
            Community
          </Link>
          <Link href="#faq" className={styles.navLink}>
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 