import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={`${styles.contact} section`}>
      <div className="container">
        <span className={styles.sub}>Get in Touch</span>
        <h1>Contact <span className="gold">Aradhi Tower</span></h1>
        
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>Corporate Office</h3>
              <p><strong>CPH Ltd. Bangladesh</strong></p>
              <p>House 12, Road 4, Banani DOHS</p>
              <p>Dhaka-1206, Bangladesh</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Direct Inquiries</h3>
              <p>Phone: +880 17XX XXXXXX</p>
              <p>Hotline: 16XXX (Toll Free)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Email</h3>
              <p>sales@aradhitower.com</p>
              <p>info@cphbd.com</p>
            </div>
          </div>
          
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Send an Enquiry</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="interest">Interested in</label>
              <select id="interest" className={styles.select}>
                <option>Residential Apartment</option>
                <option>Commercial Space</option>
                <option>Luxury Villa</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enquire Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
