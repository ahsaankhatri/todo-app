import React, { Component, Fragment } from "react";
import ListGroup from "./listGroup";
import NoOfItems from "./noOfItems";
import Display from "./display";
import Clear from "./clear";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "",
          completed: false,
        },
      ],
      data: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      data: [...this.state.data, { name: this.state.name, completed: false }],
    });
    e.target.reset();
  };

  handleDelete = (index) => {
    const newList = [...this.state.data];
    newList.splice(index, 1);

    this.setState({ data: newList });
  };

  handleAllCheck = (e) => {
    e.preventDefault();

    let { completed } = this.state.data;

    this.setState({ completed: !completed });
  };

  handleCheckChange = (index) => {
    let newData = [...this.state.data];
    newData[index].completed = !newData[index].completed;
    this.setState({ data: newData });
  };

  render() {
    return (
      <Fragment>
        <h1 className="display-1 text-center" style={{ color: "#f7c6c6" }}>
          todos
        </h1>
        <ListGroup
          data={this.state.data}
          onSubmitted={this.handleSubmit}
          onClicked={this.handleAllCheck}
          onChanged={this.handleChange}
          onCheckChange={this.handleCheckChange}
          onDeletion={this.handleDelete}
        />
        <div className="bottom">
          {this.state.data.length > 0 && (
            <NoOfItems noOfTodos={this.state.data.length} />
          )}
          {this.state.data.length > 0 && (
            <Display completedItem={this.state.data.completed} />
          )}
          {this.state.data.some(({ completed }) => completed) && (
            <Clear onCliked={() => this.handleDelete(this.props.index)} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
