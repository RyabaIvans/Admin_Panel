import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import MainPart from "./components/MainPart/MainPart";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainPart />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
