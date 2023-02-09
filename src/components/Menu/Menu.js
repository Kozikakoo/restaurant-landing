import React from "react";
import Title from "../Title/Title";
import MenuItem from "../MenuItem/MenuItem";

function Menu() {
    return (
        <section id="menu">
            <Title title="DELICIOUS MENU"/>
            <p className="menu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                molestie est a, tempor
                magna.</p>
            <ul className="menu__categories">
                <li className="menu__category"><a className="menu__link" href="#">SOUPE</a></li>
                <li className="menu__category"><a className="menu__link" href="#">PIZZA</a></li>
                <li className="menu__category"><a className="menu__link" href="#">PASTA</a></li>
                <li className="menu__category"><a className="menu__link" href="#">DESERT</a></li>
                <li className="menu__category"><a className="menu__link" href="#">WINE</a></li>
                <li className="menu__category"><a className="menu__link" href="#">BEER</a></li>
                <li className="menu__category"><a className="menu__link" href="#">DRiNKS</a></li>
            </ul>
            <ul className="menu__items">
                {
                    [...Array(21)].map((item, index) => <MenuItem key={index}/>)
                }

            </ul>
        </section>


    )
}

export default Menu;