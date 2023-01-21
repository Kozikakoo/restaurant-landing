import React from "react";
import Title from "../Title/Title";

function TextBlock({title}) {
    return (

        <div className="block-text">
            <Title title={title}/>
            <p className="block-text__paragraph_bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis at velit maximus, molestie est a, tempor magna.</p>
            <p className="block-text__paragraph">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere.
                Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
                Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
        </div>
    )
}

export default TextBlock;