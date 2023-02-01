import React from "react";
import {clock} from "../../utils/constants";
import Title from "../Title/Title";
import {useForm} from "../../hooks/useForm";

function Booking() {
    const name = useForm("", {isEmpty: true, minLength: 3, maxLength: 30})
    const email = useForm("", {isEmpty: true, minLength: 3, emailError: true})
    const phone = useForm("", {isEmpty: true, phoneError: true})
    const people = useForm("", {isEmpty: true, minLength: 3, numberError: true})
    const date = useForm("", {isEmpty: true})
    const time = useForm("", {isEmpty: true})

    return (
        <section className="booking">

            <div className="booking__form-block">
                <Title title={"BOOK A TABLE"}/>
                <form className="booking__form">
                    <input className="booking__form-input" type="text" name="name" placeholder="Name" required/>
                    <input className="booking__form-input" type="email" name="email" placeholder="Email"/>
                    <input className="booking__form-input" type="tel" name="phone" placeholder="Phone"/>
                    <input className="booking__form-input" type="number" name="people" placeholder="People"/>
                    <input className="booking__form-input" type="date" name="data" placeholder="Date (mm/dd)"/>
                    <input className="booking__form-input" type="time" name="time" placeholder="Time"/>
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