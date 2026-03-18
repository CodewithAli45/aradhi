import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/luxury_real_estate_hero.png" 
          alt="Luxury Real Estate" 
          fill 
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>
          Crafting <span className="accent">Future</span> Spaces
        </h1>
        <p className={styles.subtitle}>
          Aradhi Developers brings you premium residential and commercial projects that redefine luxury living.
        </p>
        <div className={styles.actions}>
          <button className="btn btn-primary">View Projects</button>
          <button className="btn">Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
