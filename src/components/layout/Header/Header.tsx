import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logo}>
          <Link href="/">ARADHI</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className={styles.cta}>
          <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
