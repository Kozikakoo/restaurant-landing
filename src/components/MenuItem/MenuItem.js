import React from "react";

function MenuItem() {
  return(
      <li className="menu__item">
          <div className="menu__item-block">
              <h4 className="menu__dish">Pizza quatro stagioni &#46;&#46;&#46;&#46;</h4>
              <p className="menu__dish-desc">Integer ullamcorper neque eu purus euismod</p>
          </div>
          <p className="menu__dish-price">55,68&nbsp;USD</p>
      </li>
  )
}

export default MenuItem;