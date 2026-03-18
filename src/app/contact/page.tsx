import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={`${styles.contact} section`}>
      <div className="container">
        <h1>Contact Us</h1>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>Visit Us</h3>
              <p>123 Developer Lane, Real Estate City, EC1 2AB</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Call Us</h3>
              <p>+1 234 567 890</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email Us</h3>
              <p>info@aradhi.com</p>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="I want to enquire about..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
