import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
      <div
        className="p-3"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "70px",
          width: "100%",
        }}
      >
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
