import React, {useEffect} from 'react';

import Title from '../Title/Title';
import {useForm} from '../../hooks/useForm';

function Contact({submitContact}) {
  const name = useForm('', {isEmpty: true, minLength: 3, maxLength: 30});
  const email = useForm('', {isEmpty: true, minLength: 3, emailError: true});
  const phone = useForm('', {isEmpty: true, minLength: 3, phoneError: true});
  const text = useForm('', {isEmpty: true});

  const changeBorderInput = (inputName) => {
    document.getElementById(`contact-${inputName}`).style.border = '1px red solid';
    document.getElementById(`contact-${inputName}`).style.color = 'red';
    return true;
  };

  useEffect(() => {
    document.querySelectorAll('input:valid, textarea:valid').forEach((l) => {
      l.style.border = 'none';
      l.style.color = 'black';
    });
  }, [name.value, email.value, phone.value, text.value]);

  return (
    <section id="contact">
      <Title title="CONTACT"/>
      <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
      <form className="contact__form" onSubmit={submitContact} noValidate>
        <div
          className="input-container">{((name.isDirty && name.isEmpty) || name.maxLengthError || name.minLengthError)
            && changeBorderInput('name')
            && <div className="error-text">{name.errorMessages}</div>}
          <input className="contact__form-input" id="contact-name" value={name.value}
            onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} type="text"
            name="name"
            placeholder="Name" required minLength="3" maxLength="30"/>
        </div>
        <div className="input-container">
          {((email.isDirty && email.isEmpty) || email.emailError) && changeBorderInput('email') &&
                        <div className="error-text">{email.errorMessages}</div>}
          <input className="contact__form-input" id="contact-email" value={email.value}
            onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} type="email"
            name="email"
            placeholder="Email" minLength="3" required/>
        </div>
        <div className="input-container">
          {((phone.isDirty && phone.isEmpty) || phone.phoneError) && changeBorderInput('phone') &&
                        <div className="error-text">{phone.errorMessages}</div>}
          <input className="contact__form-input" id="contact-phone" value={phone.value}
            onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} type="tel"
            name="phone"
            placeholder="Phone" required/>
        </div>
        <div className="input-container-text">
          {text.isDirty && text.isEmpty && changeBorderInput('textarea') &&
                        <div className="error-text">{text.errorMessages}</div>}
          <textarea className="contact__form-textarea" id="contact-textarea" value={text.value}
            onChange={e => text.onChange(e)} onBlur={e => text.onBlur(e)} name="text"
            placeholder="Message" required/>
        </div>
        <button className="contact__submit">SEND MESSAGE</button>
      </form>
      <ul className="contact__list">
        <li className="contact__info"><i className="fa-solid fa-location-dot contact__color"></i>&nbsp;5th
                    London Boulevard, U.K.
        </li>
        <li className="contact__info"><i className="fa-solid fa-phone-flip contact__color"></i>&nbsp;+40 729 131
                    637/+40 726 458 782
        </li>
        <li className="contact__info"><i
          className="fa-solid fa-envelope contact__color"></i>&nbsp;office@mindblister.com
        </li>
      </ul>
    </section>
  );

}

export default Contact;