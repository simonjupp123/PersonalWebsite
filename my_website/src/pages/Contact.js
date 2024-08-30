// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    // TODO RENAME CSS HERE
    <section id="about"> 
      <div>
        <p class="section__text__p1">Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <br></br>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;

