import React from "react";
import {clock} from "../../utils/constants";
import Title from "../Title/Title";
import {useForm} from "../../hooks/useForm";

function Booking() {
    const name = useForm("", {isEmpty: true, minLength: 3, maxLength: 30});
    const email = useForm("", {isEmpty: true, minLength: 3, emailError: true});
    const phone = useForm("", {isEmpty: true, phoneError: true});
    const people = useForm("", {isEmpty: true, numberError: true});
    const date = useForm("", {isEmpty: true});
    const time = useForm("", {isEmpty: true});

    return (
        <section className="booking">

            <div className="booking__form-block">
                <Title title={"BOOK A TABLE"}/>
                <form className="booking__form">
                    <div className="input-container">
                        {((name.isDirty && name.isEmpty) || name.maxLengthError || name.minLengthError) &&
                            <div className="error-text">{name.errorMessages}</div>}
                        <input className="booking__form-input" type="text" name="name" placeholder="Name"
                               value={name.value}
                               onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)}/>
                    </div>
                    <div className="input-container">
                        {((email.isDirty && email.isEmpty) || email.emailError) && <div className="error-text">{email.errorMessages}</div>}
                        <input className="booking__form-input" type="email" name="email" placeholder="Email"
                               value={email.value}
                               onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}/>
                    </div>
                    <div className="input-container">
                        {((phone.isDirty && phone.isEmpty) || phone.phoneError) && <div className="error-text">{phone.errorMessages}</div>}
                        <input className="booking__form-input" type="tel" name="phone" placeholder="Phone"
                               value={phone.value}
                               onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)}/>
                    </div>
                    <div className="input-container">
                        {((people.isDirty && people.isEmpty) || people.numberError) && <div className="error-text">{people.errorMessages}</div>}
                        <input className="booking__form-input" type="number" name="people" placeholder="People"
                               value={people.value}
                               onChange={e => people.onChange(e)} onBlur={e => people.onBlur(e)}/>
                    </div>
                    <div className="input-container">
                        { date.isDirty && date.isEmpty && <div className="error-text">{date.errorMessages}</div>}
                        <input className="booking__form-input" type="date" name="date" placeholder="Date (mm/dd)"
                               value={date.value}
                               onChange={e => date.onChange(e)} onBlur={e => date.onBlur(e)}/>
                    </div>
                    <div className="input-container">
                        {time.isDirty && time.isEmpty && <div className="error-text">{time.errorMessages}</div>}
                        <input className="booking__form-input" type="time" name="time" placeholder="Time"
                               value={time.value}
                               onChange={e => time.onChange(e)} onBlur={e => time.onBlur(e)}/>
                    </div>
                    <button className="booking__submit" type="submit">BOOK NOW</button>
                </form>
            </div>

            <img className="restaurant-image" src={clock} alt="cook"/>
            <p className="booking__working-hours">&nbsp;Mon - Fri: <span
                className="booking__working-hours_bold">&nbsp;8PM - 10PM</span>, Sat - Sun:
                <span className="booking__working-hours_bold">&nbsp;8PM - 3AM</span>, Phone: <span
                    className="booking__working-hours_bold">
                     &nbsp;+40 729 131 637/+40 726 458 782</span></p>
        </section>
    )
}

export default Booking;