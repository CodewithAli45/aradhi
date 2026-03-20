import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image 
              src="/aradhi_logo.png" 
              alt="Aradhi Tower Logo" 
              width={50} 
              height={50} 
              className={styles.logoImg}
            />
            <h2>ARADHI TOWER</h2>
          </div>
          <p className={styles.tagline}>"Your dream is our deposit."</p>
          <p className={styles.company}>A project by <strong>CPH Ltd. Bangladesh</strong></p>
        </div>
        <div className={styles.links}>
          <h3>Navigation</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Our Projects</Link></li>
            <li><Link href="/contact">Get in Touch</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Contact Details</h3>
          <p>Dhaka, Bangladesh</p>
          <p>Email: info@aradhitower.com</p>
          <p>Phone: +880 1XXX XXXXXX</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} CPH Ltd. Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
