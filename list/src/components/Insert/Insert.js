import React, { useState } from "react";

import "../../css/insert.css";

function Insert(props) {
  const [note, setnote] = useState({
    title: "",
    do: "",
  });

  const onsubmit = () => {
    props.addhandle(note.title, note.do);
  };

  return (
    <>
      <div className="box-insert">
        <div className="input">
          <div className="top">
            <form className="label-ti">
              <label>
                Title:
                <input
                  type="text"
                  onChange={(e) => setnote({ ...note, title: e.target.value })}
                />
              </label>
            </form>
          </div>
          <div className="botm">
            <form className="label-do">
              <label>
                Do:
                <textarea
                  type="text"
                  className="text"
                  onChange={(e) => setnote({ ...note, do: e.target.value })}
                />
              </label>
            </form>
          </div>
        </div>
        <div className="action">
          <div className="btns">
            <button className="a" onClick={onsubmit}>
              ADD
            </button>
            <button className="e">Edit</button>
            <button className="d">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insert;
