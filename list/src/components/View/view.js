import React from "react";

import "../../css/view.css";
import Card from "../cards/card";

function View(props) {
  return (
    <>
      <div className="box-view">
        {props.listv.map((item, index) => (
          <Card item={item} key={index} id={index} delete={props.delethandle} />
        ))}
      </div>
    </>
  );
}

export default View;
