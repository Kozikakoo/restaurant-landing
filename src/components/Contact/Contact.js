import React from "react";
import Title from "../Title/Title";

function Contact() {
    return(
        <section className="contact">
            <Title title="CONTACT"/>
            <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
            <form className="contact__form">
                <input className="contact__form-input" type="text" name="name" placeholder="Name" required/>
                <input className="contact__form-input" type="email" name="email" placeholder="Email"/>
                <input className="contact__form-input" type="tel" name="phone" placeholder="Phone"/>
                <textarea className="contact__form-textarea" placeholder="Message"/>
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