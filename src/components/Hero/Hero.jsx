import React,{useState,useEffect} from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Varsha</h1>
            <p className={styles.description}>
              I'm a MERN Stack developer with eagerness to learn new things and apply my skills in the new projects.
              Reach out to me to know more!
            </p>
            <a className={styles.contactBtn} href='mailto:varshakammarik@gmail.com'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage2.png")} alt='hero-img'/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        
    </section>
  )
}

export default Hero
