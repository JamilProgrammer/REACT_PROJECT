import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  mujamil = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log(this.state.username);
      }
    );
  };

  clickHandler = (event) => {
    event.preventDefault();
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.mujamil}
          placeholder="ENTER YOUR VALUE"
        />

        <input type="submit" onClick={this.clickHandler} value="Clickhere" />
      </div>
    );
  }
}

export default Todo;
