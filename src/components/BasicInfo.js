import React, { Component } from "react";
import "../App.css";

export default class BasicInfo extends Component {
  constructor(props) {
    super();
    // hard
    this.state = {
      Person: [
        {
          id: 1,
          Name: "Elena Baskin",
          Number: "843-680-1969",
          DOB: "05-31-2000",
        },
        {
          id: 2,
          Name: "Ellisa Baskin",
          Number: "803-427-1969",
          DOB: "05-31-1974",
        },
        {
          id: 3,
          Name: "Daishaun Baskin",
          Number: "803-669-1969",
          DOB: "08-02-1996",
        },
        {
          id: 4,
          Name: "Sterling McLean-Hasinger",
          Number: "843-680-9619",
          DOB: "08-31-2001",
        },
        {
          id: 5,
          Name: "Dally Tarte",
          Number: "843-669-9619",
          DOB: "11-26-2001",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {/* medium */}
        <p>Name: {this.props.info.Person.Name}</p>
        <p>Number: {this.props.info.Person.Number}</p>
        <p>DOB: {this.props.info.Person.Birthdate}</p>

        {/* hard */}
        <div className="Array">
          <ul>
            {this.state.Person.map((d) => (
              <li key={d.id}>
                Name: {d.Name} <br></br>
                Number: {d.Number} <br></br>
                DOB: {d.DOB}
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
