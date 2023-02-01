import React, {useEffect, useState} from "react";
import Title from "../Title/Title";
import {useForm} from "../../hooks/useForm";

function Contact() {
    const name = useForm("", {isEmpty: true, minLength: 3, maxLength: 30})
    const email = useForm("", {isEmpty: true, minLength: 3, emailError: true})
    const phone = useForm("", {isEmpty: true, minLength: 3, phoneError: true})
    const text = useForm("", {isEmpty: true, minLength: 5})
    const [isBorderRed, setBorderRed] = useState(false)
    const nameError = (name.isDirty && name.isEmpty) || name.maxLengthError || name.minLengthError
    const emailError = (email.isDirty && email.isEmpty) || email.emailError
    const phoneError = (phone.isDirty && phone.isEmpty) || phone.phoneError
    const textError = (text.isDirty && text.isEmpty) || text.minLengthError

    // const handleBorderInput = (inputName) => {
    //     isBorderRed ? setBorderRed(false) : setBorderRed(true)
    //     return inputName
    // }classList.add("contact__form-input_border")

    const changeBorderInput = (inputName) => {
        document.getElementById(`contact-${inputName}`).style.border = "1px red solid"
        return true
    }

    // useEffect((inputName) => {
    //     if (isBorderRed) document.getElementById(`contact-${handleBorderInput(inputName)}`).classList.add("contact__form-input_border")
    //     else document.getElementById(`contact-${handleBorderInput(inputName)}`).classList.remove("contact__form-input_border")
    // }, [isBorderRed])
    //

    return (
        <section className="contact">
            <Title title="CONTACT"/>
            <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
            <form className="contact__form">
                <div
                    className="contact__form-container">{nameError && changeBorderInput("name") &&
                    <div className="input__error">{name.errorMessages}</div>}
                    <input className="contact__form-input" id="contact-name" value={name.value}
                           onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} type="text" name="name"
                           placeholder="Name" required/>
                </div>
                <div className="contact__form-container">
                    {emailError && changeBorderInput("email") &&
                        <div className="input__error">{email.errorMessages}</div>}
                    <input className="contact__form-input" id="contact-email" value={email.value}
                           onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} type="email" name="email"
                           placeholder="Email"/>
                </div>
                <div className="contact__form-container">
                    {phoneError && changeBorderInput("phone") &&
                        <div className="input__error">{phone.errorMessages}</div>}
                    <input className="contact__form-input" id="contact-phone" value={phone.value}
                           onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} type="tel" name="phone"
                           placeholder="Phone"/>
                </div>
                <div className="contact__form-container-text">
                    {textError && changeBorderInput("textarea") &&
                        <div className="input__error">{text.errorMessages}</div>}
                    <textarea className="contact__form-textarea" id="contact-textarea" value={text.value}
                              onChange={e => text.onChange(e)} onBlur={e => text.onBlur(e)} name="text"
                              placeholder="Message"/>
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
    )

}

export default Contact;