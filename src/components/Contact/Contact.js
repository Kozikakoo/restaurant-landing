import React from "react";
import Title from "../Title/Title";
import {useForm} from "../../hooks/useForm";

function Contact() {
    const name = useForm("", {isEmpty: true, minLength: 3, maxLength: 30})
    const email = useForm("", {isEmpty: true, minLength: 3, emailError: true})
    const phone = useForm("", {isEmpty: true, minLength: 3, phoneError: true})
    const text = useForm("", {isEmpty: true, minLength: 5})


    return(
        <section className="contact">
            <Title title="CONTACT"/>
            <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
            <form className="contact__form">
                {((name.isDirty&&name.isEmpty)||name.maxLengthError||name.minLengthError) && <div>{name.errorMessages}</div>}
                <input className="contact__form-input" value={name.value} onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} type="text" name="name" placeholder="Name" required/>
                {((email.isDirty&&email.isEmpty)||email.phoneError) && <div>{email.errorMessages}</div>}
                <input className="contact__form-input" value={email.value} onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} type="email" name="email" placeholder="Email"/>
                {((phone.isDirty&&phone.isEmpty)||phone.phoneError) && <div>{phone.errorMessages}</div>}
                <input className="contact__form-input" value={phone.value} onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} type="tel" name="phone" placeholder="Phone"/>
                {((text.isDirty&&text.isEmpty)||text.minLengthError) && <div>{text.errorMessages}</div>}
                <textarea className="contact__form-textarea" value={text.value} onChange={e => text.onChange(e)} onBlur={e => text.onBlur(e)} name="text" placeholder="Message"/>
                <button className="contact__submit">SEND MESSAGE</button>
            </form>
            <ul className="contact__list">
                <li className="contact__info"><i className="fa-solid fa-location-dot contact__color"></i>&nbsp;5th London Boulevard, U.K.</li>
                <li className="contact__info"><i className="fa-solid fa-phone-flip contact__color"></i>&nbsp;+40 729 131 637/+40 726 458 782</li>
                <li className="contact__info"><i className="fa-solid fa-envelope contact__color"></i>&nbsp;office@mindblister.com</li>
            </ul>
        </section>
    )

}

export default Contact;