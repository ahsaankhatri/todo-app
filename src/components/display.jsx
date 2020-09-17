import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <p className="para">{this.props.noOfTodos} items left</p>
        <button type="button" className=" all btn btn-light p-1 mr-3">
          All
        </button>
        <button type="button" className=" act btn btn-light p-1 mr-3">
          Active
        </button>
        <button type="button" className=" comp btn btn-light p-1">
          Completed
        </button>
      </div>
    );
  }
}

export default Display;
