import React, { Component, Fragment } from "react";
import UniqueId from "react-html-id";
import Clear from "./clear";
import Display from "./display";

class MainPage extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      data: [],
      id: this.nextUniqueId(),
      finalData: "",
      checkValue: false,
      show: false,
    };

    console.log(this.state);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ finalData: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { show } = this.state;

    this.setState({
      data: [...this.state.data, this.state.finalData],
      finalData: "",
    });
    e.target.reset();
    if (this.state.data.length >= 0) this.setState({ show: !show });
  };

  handleDelete = (index, e) => {
    e.preventDefault();
    const newList = [...this.state.data];
    newList.splice(index, 1);

    this.setState({ newList: newList });
  };

  handleCheck = (e) => {
    e.preventDefault();
  };

  handleCheckChange = () => {
    const { checkValue } = this.state;

    this.setState({ checkValue: !checkValue });
  };

  render() {
    return (
      <Fragment>
        <h1 className="display-1 text-center" style={{ color: "#f7c6c6" }}>
          todos
        </h1>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="label" onClick={this.handleCheck}>
            ^
          </label>
          <input
            autoFocus
            type="text"
            onChange={this.handleChange}
            className="new-todo shadow-lg p-3 mb-5 bg-white"
            placeholder="What needs to be done?"
          />
          <ul className="list-group">
            {this.state.data.map((data, index) => {
              return (
                <div>
                  <input
                    className="check"
                    onChange={this.handleCheckChange}
                    type="checkbox"
                    style={{
                      cursor: "pointer",
                    }}
                    defaultChecked={this.state.checkValue}
                  />
                  <li
                    className="list-group-item disabled w-50 p-3 mx-auto"
                    style={{
                      textDecoration: this.state.checkValue && "line-through",
                    }}
                    key={"todo-" + index}
                  >
                    {data}
                  </li>
                  <button
                    onClick={this.handleDelete.bind(this, index)}
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
          {this.state.show && <Display noOfTodos={this.state.data.length} />}
          {this.state.checkValue && <Clear />}
        </form>
      </Fragment>
    );
  }
}

export default MainPage;
