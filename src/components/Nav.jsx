import React from "react";
import logo from "../assets/Image.png";
import human from "../assets/human.png";
import bell from "../assets/bell.png";
import "./Nav.css";
function Nav() {
  return (
    <div id="nav">
      <div>
        <img src={logo} />
      </div>
      <div>
        <img src={human} />
        <img src={bell} />
      </div>
    </div>
  );
}

export default Nav;
