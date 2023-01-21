import React from "react";
import Title from "../Title/Title";

function Menu() {
    return (
        <section className="menu">
            <Title title="DELICIOUS MENU"/>
            <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
            <ul className="menu__categories">
                <li className="menu__category"><a href="#">SOUPE</a></li>
                <li className="menu__category"><a href="#">PIZZA</a></li>
                <li className="menu__category"><a href="#">PASTA</a></li>
                <li className="menu__category"><a href="#">DESERT</a></li>
                <li className="menu__category"><a href="#">WINE</a></li>
                <li className="menu__category"><a href="#">BEER</a></li>
                <li className="menu__category"><a href="#">DRiNKS</a></li>
            </ul>
            <ul className="menu__items">
                <li className="menu__item">
                    {

                    }
                    <div>
                        <h4>Pizza quatro stagioni &#46;&#46;&#46;&#46;</h4>
                        <p>Integer ullamcorper neque eu purus euismod</p>
                    </div>
                    <p>55,68 USD</p>
                </li>

            </ul>
        </section>


    )
}

export default Menu;