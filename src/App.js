import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import MainPart from "./components/MainPart/MainPart";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainPart />
      </div>
    </div>
  );
}

export default App;
