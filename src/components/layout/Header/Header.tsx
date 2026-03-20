import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/aradhi_logo.png" 
              alt="Aradhi Tower Logo" 
              width={50} 
              height={50} 
              className={styles.logoImg}
            />
            <span className={styles.logoText}>ARADHI TOWER</span>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className={styles.cta}>
          <Link href="/contact" className="btn btn-primary">Enquire</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
