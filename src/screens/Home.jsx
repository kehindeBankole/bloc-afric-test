import React from "react";
import "./Home.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
function Home() {
  return (
    <div>
      <div className="balance-card">
        <div className="afya">
          <div className="aff">
            <div className="afya-icon mb-3">
              <h3>afya</h3>
            </div>
            <div className="afya-content">
              <h1>143</h1>
              <b>balance</b>
            </div>
          </div>
        </div>
        <hr />
        <div className="zar">
          <div className="aza">
            <div className="zar-icon mb-3"><h3>zar</h3></div>
            <div className="zar-content">
              <h1>r21.00</h1>
              <b>equivalent</b>
            </div>
          </div>
        </div>
      </div>
      <div className="select-currency pt-3 mt-4 px-2">
        <b>select currency</b>
      </div>

      <div className="ddd mt-4">
        <div className="input-group bg-dark">
          <div
            className="input-group-text"
            style={{ border: 0, backgroundColor: "gainsboro" , borderRadius:0 }}
          >
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ border: 0, backgroundColor: "gainsboro" , borderRadius:0 }}
            >
              <option>AFYA</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
            style={{borderRadius:0}}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between px-4 my-4 send-and-receive-buttons">
        <div className="btn d-flex justify-content-center align-items-center">
          send
        </div>
        <div className="btn d-flex justify-content-center align-items-center">
          receive
        </div>
      </div>

      <div className="recent-activity py-3 px-2">
        <b>recent activity</b>
      </div>

      <div className="lists">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item p-3 d-flex justify-content-between">
              {" "}
              <div className="icon">
                <img src={icon1} />
              </div>{" "}
              <div className="medical">HIV blood draw test</div>
              <div className="result">A100</div>
            </li>
            <li className="list-group-item p-3 d-flex justify-content-between">
              <div className="icon">
                <img src={icon2} />
              </div>
              <div className="medical">HIV blood draw test</div>
              <div className="result">A100</div>
            </li>
            <li className="list-group-item p-3 d-flex justify-content-between">
              <div className="icon">
                <img src={icon3} />
              </div>
              <div className="medical">HIV blood draw test</div>
              <div className="result">A100</div>
            </li>
          </ul>
        </div>
      </div>
   
   <div className="space"></div>
    </div>

    
  );
}

export default Home;
