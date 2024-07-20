import React from 'react';
import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.icons}>
        <a href='mailto:varshakammarik@gmail.com'><img src={getImageUrl("contact/emailIcon.png")} alt='email' className={styles.icon} /></a>
        <a href='https://github.com/VarshaKammari'><img src={getImageUrl("contact/githubIcon.png")} alt='github' className={styles.icon}/></a>
        <a href='https://www.linkedin.com/in/varsha-kammari/'><img src={getImageUrl("contact/linkedinIcon.png")} alt='email' className={styles.icon}/></a>
      </div>
      <div className={styles.tagline}>
        <h4>Made with &#128153;</h4>
        <hr />
        <div className={styles.copyright}>
          <h4>Copyright &copy; 2024 Varsha Kammari </h4>
          <h4> All Rights Reserved</h4>
        </div>
        
      </div>
    </section>
  )
}

export default Footer
