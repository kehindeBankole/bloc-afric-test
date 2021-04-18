import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Activity from "./screens/Activity";
import Earn from "./screens/Earn";
import Wallet from "./screens/Wallet";
import Market from "./screens/Market";
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route path="/home" component={Home}  exact />
          <Route path="/activity" component={Activity} exact />
          <Route path="/earn" component={Earn} exact/>
          <Route path="/wallet" component={Wallet} exact/>
          <Route path="/market" component={Market} exact/>
        </Switch>
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
      </Router>
     
    </div>
  );
}

export default App;
