import React, { Component } from "react";
import TodoList from "./components/todoList";
import TodoInput from "./components/todoInput";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    item: "",
    id: uuid(),
    items: [],
    editItem: false
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      item: "",
      id: uuid(),
      items: updatedItems,
      editItem: false
    });
  };

  handleClearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems
    });
  };

  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItems,
      item: selectItem.title,
      editItem: true
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
