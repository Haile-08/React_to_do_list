import React from "react";

function Insert() {
  return (
    <>
      <div className="box-insert">
        <div className="input">
          <form>
            <label>
              Title:
              <input type="text" />
            </label>
            <label>
              Do:
              <textarea type="text" />
            </label>
          </form>
        </div>
        <div className="action">
          <div className="btns">
            <button>ADD</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insert;
