import React from "react";
import PropTypes from "prop-types";

export class NewTodo extends React.Component {
  state = {
    todoTitle: ""
  }

  render() {
    const {todoTitle} = this.state;

    return (
      <form className="new-todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          onChange={this.onChange}
          value={todoTitle}/>
        <button type="button" disabled={!todoTitle}>Add Todo</button>
      </form>
    );
  }

  onChange = (evt) => {
    this.setState({todoTitle: evt.currentTarget.value});
  }

  onSubmit = (evt) => {
    this
      .props
      .addTodo(this.state.todoTitle);
    this.setState({todoTitle: ""})
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
