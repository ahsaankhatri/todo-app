import React, { Component } from "react";

class Clear extends Component {
  render() {
    return (
      <button
        type="button"
        className="clr btn btn-light"
        onClick={this.props.onCliked}
      >
        Clear completed
      </button>
    );
  }
}

export default Clear;
