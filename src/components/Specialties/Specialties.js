import React from "react";
import {iceCream} from "../../utils/constants";
import TextBlock from "../TextBlock/TextBlock";

function Specialties() {
    return (<section className="section specialties">
        <h2 className="section__title">SPECIALTIES</h2>
        <img className="restaurant-image" src={iceCream} alt="cook"/>
        <TextBlock title="chocolate pancakes"/>

    </section>)
}

export default Specialties;