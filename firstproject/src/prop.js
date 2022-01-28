import React, { Component } from "react";

class Mujamil extends Component {
  constructor(props) {
    super(props);
    const { name, age } = this.props;
    this.state = {
      u_name: name,
      u_age: age,
    };
  }

  clickHandler = () => {
    this.setState({
      u_name: "hisham",
      u_age: 22,
    });
  };

  render() {
    const { u_name, u_age } = this.state;
    return (
      <div>
        <h1>{u_name}</h1>
        <h1>{u_age}</h1>
        <button onClick={this.clickHandler}>clickMe</button>
      </div>
    );
  }
}

export default Mujamil;
