import React from "react";

import "../../css/view.css";
import Card from "../cards/card";

function View(props) {
  const viewrm = (j) => {
    props.delethandle(j);
  };
  return (
    <>
      <div className="box-view">
        {props.listv.map((item, index) => (
          <Card item={item} key={index} id={index} delete={viewrm} />
        ))}
      </div>
    </>
  );
}

export default View;
