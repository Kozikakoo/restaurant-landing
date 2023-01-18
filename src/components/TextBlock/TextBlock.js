import React from "react";

function TextBlock({title}) {
    return (

        <div className="block-text">
            <h3 className="block-text__title">{title}</h3>
            <div className="block-text__rectangle"></div>
            <p className="block-text__paragraph_bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis at velit maximus, molestie est a, tempor magna.</p>
            <p className="block-text__paragraph">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere.
                Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
                Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
        </div>
    )
}

export default TextBlock;