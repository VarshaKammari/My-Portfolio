import React from 'react';
import { getImageUrl } from '../../utils';
import styles from'./About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/about.png")} 
                alt='about-image' 
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor-image' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in developing responsive websites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='bd-image' />
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>I'm a backend developer with experience in developing fast and efficient APIs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='fs-image' />
                    <div className={styles.aboutItemText}>
                        <h3>Fullstack developer</h3>
                        <p>I'm a fullstack developer with expertise in MERN stack development.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
