import React,{ useRef} from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_tqmh6lv', 'template_49epjjm',form.current,{
            publicKey:'YsjZjUZyNt8t_BoTp',
        }).then(
            ()=>{
                // console.log("Success");
                alert("Response submitted successfully");
            },
            (error)=>{
                // console.log("Failed..",error.text);
                alert("Failed to submit your response");
            },
        );

        form.current.reset();
    };
  return (
    <section id='hire-me' className={styles.container}>
      <h2 className={styles.title}>Hire Me!</h2>
      <div className={styles.content}>
        <img 
            src={getImageUrl("contact/contact.png")} 
            alt='contact-image' 
            className={styles.contactImg}
        />
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.nameFields}>
                <input type='text' placeholder='FirstName' name='Fname' className={styles.nameField} required/>
                <input type='text' placeholder='LastName' name='Lname' className={styles.nameField} required/>
            </div>
            <input type='email' placeholder='email' name='email' className={styles.email} required/>
            <textarea col='3' rows="4" name='message' placeholder='Enter your message here' className={styles.textarea} required/>
            <button type='submit' className={styles.btn}>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
