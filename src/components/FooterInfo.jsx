import styles from '../styles/footerInfo.module.css';

function FooterInfo() {
  return (
    <div className={styles.content}>
      <footer className={styles.footer}>
        <div className={styles.general}>
          <h2>ExploreEra</h2>
          <p>Travel agency which helps you to plan your perfect holidays</p>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <img src='./socials/instagram.svg' alt='instagram logo' />
            <img src='./socials/facebook.svg' alt='instagram logo' />
            <img src='./socials/linkedin.svg' alt='instagram logo' />
          </div>
        </div>
        <div className={styles.links}>
          <h2>Links</h2>
          <a href='#0'>Home</a>
          <a href='#0'>About us</a>
          <a href='#0'>Blogs</a>
          <a href='#0'>Our services</a>
          <a href='#0'>Our offers</a>
        </div>
        <div className={styles.contact}>
          <h2>Contact us</h2>
          <p>exploreera@gmail.com</p>
          <p>555111222</p>
          <h2>Subscribe news</h2>
          <div className={styles.email}>
            <span>Email</span>
            <img src='./socials/arrow.svg' alt='send an email' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterInfo;
