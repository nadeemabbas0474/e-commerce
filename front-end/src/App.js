import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
