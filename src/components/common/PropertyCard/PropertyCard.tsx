import styles from './PropertyCard.module.css';
import Image from 'next/image';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
}

const PropertyCard = ({ title, location, price, image, type }: PropertyCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className={styles.type}>{type}</span>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.location}>{location}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.detailsBtn}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
