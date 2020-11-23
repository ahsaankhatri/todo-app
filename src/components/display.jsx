import React, { Component } from "react";
import ListGroup from "./listGroup";

class Display extends Component {
  handleAllClick = (e) => {
    e.preventDefault();
    return (
      <ListGroup
        data={this.props.data}
        onSubmitted={this.handleSubmit}
        onClicked={this.handleAllCheck}
        onChanged={this.handleChange}
        onCheckChange={this.handleCheckChange}
        onDeletion={this.handleDelete}
      />
    );
  };

  handleCompleted = (e) => {
    e.preventDefault();
    return (
      this.props.completedItem && (
        <ListGroup
          data={this.props.data}
          onSubmitted={this.handleSubmit}
          onClicked={this.handleAllCheck}
          onChanged={this.handleChange}
          onCheckChange={this.handleCheckChange}
          onDeletion={this.handleDelete}
        />
      )
    );
  };

  handleActiveClick = (e) => {
    e.preventDefault();
    return (
      !this.props.completedItem && (
        <ListGroup
          data={this.props.data}
          onSubmitted={this.handleSubmit}
          onClicked={this.handleAllCheck}
          onChanged={this.handleChange}
          onCheckChange={this.handleCheckChange}
          onDeletion={this.handleDelete}
        />
      )
    );
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className=" all btn btn-light p-1 mr-3"
          onClick={this.handleAllClick}
        >
          All
        </button>
        <button
          type="button"
          className=" act btn btn-light p-1 mr-3"
          onClick={this.handleActiveClick}
        >
          Active
        </button>
        <button
          type="button"
          className=" comp btn btn-light p-1"
          onClick={this.handleCompleted}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default Display;
