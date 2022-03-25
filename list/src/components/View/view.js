import React from "react";

import "../../css/view.css";

function View() {
  return (
    <>
      <div className="box-view">
        <div className="fbox">
          <div className="text-t">
            <p className="ttext"> title</p>
            <p className="ptext"> text area</p>
          </div>
          <div className="btns-v">
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
