import React from "react";

import "../../css/insert.css";

function Insert() {
  return (
    <>
      <div className="box-insert">
        <div className="input">
          <div className="top">
            <form className="label-ti">
              <label>
                Title:
                <input type="text" />
              </label>
            </form>
          </div>
          <div className="botm">
            <form className="label-do">
              <label>
                Do:
                <textarea type="text" className="text" />
              </label>
            </form>
          </div>
        </div>
        <div className="action">
          <div className="btns">
            <button className="a">ADD</button>
            <button className="e">Edit</button>
            <button className="d">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insert;
