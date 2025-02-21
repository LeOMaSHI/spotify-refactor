import Main from "./components/Mainpart";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Main />
      </div>
      <Player />
    </div>
  );
}

export default App;
