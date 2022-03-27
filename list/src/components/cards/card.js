import React from "react";
import "../../css/view.css";

function Card(props) {
  const removehandle = (i) => {
    props.delete(i);
  };

  return (
    <div className="fbox">
      <div className="text-t">
        <p className="ttext">{props.item.title}</p>
        <p className="ptext"> {props.item.do}</p>
      </div>
      <div className="btns-v">
        <button onClick={() => removehandle(props.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
