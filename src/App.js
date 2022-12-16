import "./App.css";
import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";

export default class App extends Component {
  //  easy
  constructor(props) {
    super();
    this.state = {
      Person: {
        Name: "Elena",
        Number: "843-80-1969",
        Birthdate: "05-31-2000",
      },
    };
  }
  render() {
    return (
      <div>
        {/* very easy */}
        {/* <p>Name: Elena</p>
        <p>Number: 843-680-1969</p>
        <p>DOB: 05-31-2000</p> */}
        {/* medium */}
        <BasicInfo info={this.state} />
      </div>
    );
  }
}
