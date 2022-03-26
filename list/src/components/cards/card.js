import React from "react";
import "../../css/view.css";

function Card(props) {
  return (
    <div className="fbox">
      <div className="text-t">
        <p className="ttext">{props.item.title}</p>
        <p className="ptext"> {props.item.do}</p>
      </div>
      <div className="btns-v">
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
