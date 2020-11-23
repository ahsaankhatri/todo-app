import React, { Component } from "react";

class NoOfItems extends Component {
  render() {
    let { count } = this.props.noOfTodos;

    if (this.props.completedItem) {
      this.setState({ count: this.props.noOfTodos - 1 });
      return <p className="para">{count} items left</p>;
    } else {
      return <p className="para">{this.props.noOfTodos} items left</p>;
    }
  }
}

export default NoOfItems;
