import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import {coals} from "../../utils/constants"

function AboutUs() {
    return (
        <section className="section about-us">
            <TextBlock title="ABOUT US"/>
            <img className="restaurant-image" src={coals} alt="coals"/>
        </section>
    )
}

export default AboutUs;