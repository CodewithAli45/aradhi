import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={`${styles.about} section`}>
      <div className="container">
        <h1>About Aradhi Developers</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Founded in 2010, Aradhi Developers has been at the forefront of luxury real estate development. 
              With a commitment to excellence and a passion for architectural innovation, we have delivered 
              over 50 premium projects across the country.
            </p>
            <p>
              Our vision is to redefine urban living by creating spaces that harmonize with their surroundings 
              while providing the ultimate in comfort and sophistication.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
            <div className={styles.statCard}>
              <h3>5000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
