import React from "react";
import smile from '../assets/aboutMeSmile.png'
import placeholder from '../assets/placeholder.png'
import {useT} from '../LanguageContext'


import './pages.css'

function Contact() {

  const t =useT()

  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" />
      </div>
      <div className="content">
        <div className="contact-container-horizontal">
          <div className="contact-image-container">

            <img src={placeholder} className="contact-image"/>

          </div>
          <div className="contact-form-container">
            <h1 className="contact-form-title">{t('contact.form_title')}</h1>
            <form className="contact-form">
              <label>
                <span>email:</span>
                <input type="email" id="email" name="email" />
              </label>
              <textarea id="message" name="message" placeholder={t('contact.form_placeholder')} />
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
