import "./App.css";
import Sidebar from "./Sidebar";
import Music from "./Music";
function App() {
  return (
    <div className="app">
      <Sidebar darkTheme={true} />
      <Music darkTheme={false} />
    </div>
  );
}

export default App;
