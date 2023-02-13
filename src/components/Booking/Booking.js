import React, {useEffect} from 'react';

import {clock} from '../../utils/constants';
import Title from '../Title/Title';
import {useForm} from '../../hooks/useForm';

function Booking({submitBooking}) {
    const name = useForm('', {isEmpty: true, minLength: 3, maxLength: 30});
    const email = useForm('', {minLength: 3, emailError: true});
    const phone = useForm('', {isEmpty: true, phoneError: true});
    const people = useForm('', {isEmpty: true, numberError: true});
    const date = useForm('', {isEmpty: true});
    const time = useForm('', {isEmpty: true});

    const changeBorderInput = (inputName) => {
        document.getElementById(`booking-${inputName}`).style.border = '1px red solid';
        document.getElementById(`booking-${inputName}`).style.color = 'red';
        return true;
    };

    useEffect(() => {
        document.querySelectorAll('input:valid').forEach((l) => {
            l.style.border = 'none';
            l.style.color = 'black';
        });
    }, [name.value, email.value, phone.value, people.value, date.value, time.value]);


    return (
        <section id="booking">
            <div className="booking__form-block">
                <Title title={'BOOK A TABLE'}/>
                <form className="booking__form" onSubmit={submitBooking} noValidate>
                    <div className="input-container">
                        {((name.isDirty && name.isEmpty) || name.maxLengthError || name.minLengthError)
                            && changeBorderInput('name')
                            && <div className="error-text">{name.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-name" type="text" name="name"
                               placeholder="Name"
                               value={name.value}
                               onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} minLength="3"
                               maxLength="30" required/>
                    </div>
                    <div className="input-container">
                        {email.emailError && changeBorderInput('email') &&
                            <div className="error-text">{email.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-email" type="email" name="email"
                               placeholder="Email"
                               value={email.value}
                               onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} minLength="3"/>
                    </div>
                    <div className="input-container">
                        {((phone.isDirty && phone.isEmpty) || phone.phoneError) && changeBorderInput('phone') &&
                            <div className="error-text">{phone.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-phone"
                               pattern="^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$" type="tel" name="phone" placeholder="Phone"
                               value={phone.value}
                               onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} required/>
                    </div>
                    <div className="input-container">
                        {((people.isDirty && people.isEmpty) || people.numberError) && changeBorderInput('people') &&
                            <div className="error-text">{people.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-people" type="number" name="people"
                               placeholder="People"
                               value={people.value}
                               onChange={e => people.onChange(e)} onBlur={e => people.onBlur(e)} required min="1"/>
                    </div>
                    <div className="input-container">
                        {date.isDirty && date.isEmpty && changeBorderInput('date') &&
                            <div className="error-text">{date.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-date" type="date" name="date"
                               placeholder="Date (mm/dd)"
                               value={date.value}
                               onChange={e => date.onChange(e)} onBlur={e => date.onBlur(e)} required/>
                    </div>
                    <div className="input-container">
                        {time.isDirty && time.isEmpty && changeBorderInput('time') &&
                            <div className="error-text">{time.errorMessages}</div>}
                        <input className="booking__form-input" id="booking-time" type="time" name="time"
                               placeholder="Time"
                               value={time.value}
                               onChange={e => time.onChange(e)} onBlur={e => time.onBlur(e)} required/>
                    </div>
                    <button className="booking__submit" type="submit">BOOK NOW</button>
                </form>
            </div>

            <img className="booking__img" src={clock} alt="cook"/>
            <p className="booking__working-hours">&nbsp;Mon - Fri: <span
                className="booking__working-hours_bold">&nbsp;8PM - 10PM</span>, Sat - Sun:
                <span className="booking__working-hours_bold">&nbsp;8PM - 3AM</span>, Phone: <span
                    className="booking__working-hours_bold">
                     &nbsp;+40 729 131 637/+40 726 458 782</span></p>
        </section>
    );
}

export default Booking;