import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Interval from "./component/lifecycle";
class App extends React.Component {
  state = {
    shows: false,
    fullName: "Mezrigui Faycel",
    bio:
      "Student with GOMYCODE",
    imgSrc: (
      <img src="/Toof.jpg" alt="" className="imgf" />
    ),
    profession: "FullStack Developer",
  };
  render() {
    const buttonMsg = this.state.shows ? "Hide Profile" : "Show Profile";
    return (
      <div className="Container">
      
        <div className="">
          <h1>Profile:</h1>
        </div>
        {this.state.shows ? (
          <div className="profileElements">
            <h4>{this.state.fullName}</h4>
          
              <b>Bio:</b>
              <br />
              <h4>{this.state.bio}</h4>
              <h4>{this.state.profession}</h4>
            <div>{this.state.imgSrc}</div>
<br/>

          
          </div>
        ) 
        : null}
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {buttonMsg}
        </button>
        <Interval />
      </div>
    );
  }
}
export default App;