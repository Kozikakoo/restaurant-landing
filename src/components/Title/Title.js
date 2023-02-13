import React from 'react';

function Title({title}) {
  return (
    <>
      <h3 className="block-text__title">{title}</h3>
      <div className="block-text__rectangle"></div>
    </>
  );
}

export default Title;