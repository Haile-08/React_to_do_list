import "./css/App.css";
import Insert from "./components/Insert/Insert";
import View from "./components/View/view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box-body">
          <Insert />
          <View />
        </div>
      </header>
    </div>
  );
}

export default App;
