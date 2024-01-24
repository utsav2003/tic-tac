import React from 'react'
const Square = (props) => {

  return (
    <div className="square border_" onClick={props.func}>
      <h5>{props.value}</h5>
    </div>
  );
};
export default Square 