import React from "react";
import {rings, parties} from "../../utils/constants"

function PrivateEvents() {
    return (
        <section className="private-events">
            <h2 className="section__title">PRIVATE EVENTS</h2>
            <div className="private-events__container">
                <img className="restaurant-image" src={rings} alt="rings"/>
                <div className="private-events__rectangle private-events__rectangle_r"><p className="private-events__text private-events__text_l">WEDDINGS</p></div>
            </div>
            <div className="private-events__container">
                <img className="restaurant-image" src={parties} alt="wedding"/>
                <div className="private-events__rectangle private-events__rectangle_l"><p className="private-events__text private-events__text_l">CORPORATE&nbsp;PARTIES</p></div>
            </div>
        </section>
    )
}

export default PrivateEvents;