import React, { Component } from "react";

class TodoList extends Component {
  state = {
    input: "",
    todos: []
  };

  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();

    // copy todo list
    const editedTodos = [...this.state.todos];
    // add a new todo to the list
    // editedTodos.push({ content: ?? });
    if (this.state.input.trim() !== "") {
      editedTodos.push({ content: this.state.input });
    }
    // save the updated list and reset `input`
    // this.setState({
    this.setState({
      todos: editedTodos,
      input: ""
    });
    // });
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleDelete = indexToDelete => {
    const editedTodos = [...this.state.todos];
    editedTodos.splice(indexToDelete, 1);

    this.setState({
      todos: editedTodos
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          ></input>
          <button>save todo</button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>
              {item.content}
              <span className="delete-container">
                <button
                  type="button"
                  onClick={() => {
                    this.handleDelete(index);
                  }}
                  className="delete"
                >
                  x
                </button>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
