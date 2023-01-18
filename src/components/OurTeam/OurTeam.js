import React from "react";
import {chef} from "../../utils/constants"
import TextBlock from "../TextBlock/TextBlock";

function OurTeam() {
    return(
        <section className="section our-team">
            <h2 className="section__title">OUR TEAM</h2>
            <img className="restaurant-image" src={chef} alt="cook"/>
            <TextBlock title="MASTER CHEF"/>

        </section>
    )
}

export default OurTeam;