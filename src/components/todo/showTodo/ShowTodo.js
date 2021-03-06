import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo, deleteTodo, updateTodo } from "../../../redux";
import Loader from "../../../assets/images/831.svg";

import "./showTodo.css";

export class ShowTodo extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.todoData.todos.length < 1) {
      this.props.fetchTodo(this.props.authData.userId);
    }
  }

  handleDelete(id) {
    this.props.deleteTodo(id, this.props.authData.userId);
  }

  handleCheckbox(id, completed) {
    this.props.updateTodo(id, completed, this.props.authData.userId);
  }

  render() {
    let todos = this.props.todoData.todos;
    let output;
    if (todos.length < 1) {
      output = "<p>No Todos..Add one</P>";
    } else {
      // key is todo basically a random string generated by firebase
      output = Object.keys(todos).map((todo) => (
        <li key={todo}>
          {todos[todo]["completed"] ? (
            <span style={{'textDecoration': 'line-through'}}>{todos[todo]["task"]}</span>
          ) : (
            <span>{todos[todo]["task"]}</span>
          )}
          <input type="checkbox" id="completed" name="completed" value={todos[todo]["completed"]} checked={todos[todo]["completed"]} onClick={() => this.handleCheckbox(todo, !todos[todo]["completed"])}></input>

          <button
            className="todo-delete"
            onClick={() => this.handleDelete(todo)}
          >
            Delete
          </button>
        </li>
      ));
    }

    return (
      <>
        {this.props.todoData.loading ? (
          <p>
            <img src={Loader} alt="Loader" className="loader" />
          </p>
        ) : (
          <ul className="todo_container">{output}</ul>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authData: state.authData,
  todoData: state.todoData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodo: (userId) => dispatch(fetchTodo(userId)),
  deleteTodo: (id, userId) => dispatch(deleteTodo(id, userId)),
  updateTodo: (id, completed, userId) => dispatch(updateTodo(id, completed, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
