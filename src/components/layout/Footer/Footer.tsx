import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>ARADHI</h2>
          <p>Building dreams into reality. Premium real estate developments for a modern lifestyle.</p>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Get In Touch</h3>
          <p>123 Developer Lane, Real Estate City</p>
          <p>Email: info@aradhi.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Aradhi Real Estate Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
