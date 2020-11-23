import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    return (
      <form className="todo-form" onSubmit={this.props.onSubmitted}>
        <label className="label" onClick={this.props.onClicked}>
          ^
        </label>
        <input
          autoFocus
          type="text"
          onChange={this.props.onChanged}
          className="new-todo shadow-lg p-3 mb-5 bg-white"
          placeholder="What needs to be done?"
        />
        <ul className="list-group">
          {this.props.data.map((data, index) => {
            return (
              <div key={"todo-" + index} className="div-list">
                <input
                  className="check"
                  onChange={() => this.props.onCheckChange(index)}
                  type="checkbox"
                  style={{
                    cursor: "pointer",
                  }}
                  defaultChecked={this.props.data.completed}
                />
                <li
                  className="list-group-item disabled w-50 p-3 mx-auto"
                  style={{
                    textDecoration:
                      this.props.data[index].completed && "line-through",
                  }}
                >
                  {data.name}
                </li>
                <button
                  onClick={() => this.props.onDeletion(index)}
                  type="button"
                  className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            );
          })}
        </ul>
      </form>
    );
  }
}

export default ListGroup;
