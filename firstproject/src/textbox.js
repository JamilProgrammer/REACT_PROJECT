import React, { Component } from "react";

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  text = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  changevalue = (e) => {
    const { name } = this.state;
    e.preventDefault();
    console.log(name);
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={name}
            placeholder="ENTER YOUR VALUE"
            onChange={this.text}
          />
          <input type="submit" value="Clickhere" onClick={this.changevalue} />
        </form>
      </div>
    );
  }
}
export default Textbox;
