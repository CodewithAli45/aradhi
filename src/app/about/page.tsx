import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={`${styles.about} section`}>
      <div className="container">
        <span className={styles.sub}>About the Developer</span>
        <h1>The Visionaries Behind <span className="gold">Aradhi Tower</span></h1>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Aradhi Tower is the flagship development of <strong>CPH Ltd. Bangladesh</strong>, 
              a leader in high-end real estate and architectural innovation. With over a decade 
              of experience in crafting iconic structures, CPH Ltd. has become synonymous with quality, 
              trust, and luxury.
            </p>
            <p>
              Our mission is to create living spaces that offer a sanctuary from the urban hustle, 
              blending modern amenities with classic elegance. Aradhi Tower represents our 
              commitment to Bangladesh's future, where every project is built with the philosophy 
              that <strong>"Your dream is our deposit."</strong>
            </p>
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <h3>12+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className={styles.statCard}>
                <h3>15+</h3>
                <p>Landmark Projects</p>
              </div>
              <div className={styles.statCard}>
                <h3>1.2M</h3>
                <p>Sq. Ft Developed</p>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/luxury_real_estate_hero.png" 
              alt="Luxury Real Estate" 
              fill 
              className={styles.aboutImage}
              sizes="(max-width: 992px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
