import React, { Component } from "react";
class Todo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
    };
  }

  jamil = (event) => {
    this.setState(
      {
        uname: event.target.value,
      },

      () => {
        console.log(this.state.uname);
      }
    );
  };

  jam = (jaz) => {
    jaz.preventDefault();
    alert(this.state.uname);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.uname}
          onChange={this.jamil}
          placeholder="enter the value"
        />
        <input type="submit" onClick={this.jam} value="click here" />
      </div>
    );
  }
}
export default Todo1;
