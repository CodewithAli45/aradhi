import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/aradhi_tower_render.png" 
          alt="Aradhi Tower" 
          fill 
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={`${styles.content} container`}>
        <div className={styles.lead}>
          <span className={styles.badge}>Premium Living in Bangladesh</span>
          <h1 className={styles.title}>
            ARADHI <span className={styles.accentText}>TOWER</span>
          </h1>
          <p className={styles.tagline}>
            "Your dream is our deposit."
          </p>
          <p className={styles.description}>
            Experience architectural excellence and luxury redefined by <strong>CPH Ltd. Bangladesh</strong>. 
            We build more than just towers; we build legacies.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-primary">Discover Projects</button>
            <button className={`${styles.btnOutline} btn`}>Our Legacy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
