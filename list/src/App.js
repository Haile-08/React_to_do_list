import { useState } from "react";

import "./css/App.css";
import Insert from "./components/Insert/Insert";
import View from "./components/View/view";

function App() {
  const [list, setList] = useState([
    {
      title: "to do list",
      do: "do the thing u wanted",
    },
  ]);

  const addhandle = (title, dol) => {
    setList([...list, { title: `${title}`, do: `${dol}` }]);
  };

  const delethandle = (id) => {
    const newlist = list.splice(id, 1);
    setList(newlist);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="box-body">
          <Insert addhandle={addhandle} />
          <View listv={list} delethandle={delethandle} />
        </div>
      </header>
    </div>
  );
}

export default App;
