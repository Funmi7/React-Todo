import React from "react";
import "./Todo.css";
import styled from "styled-components";

const TodoStyled = styled.div`
  font-size: 1.2rem;
`;

class Todo extends React.Component {
  render() {
    const { todo, onTaskComplete } = this.props;
    return (
      <TodoStyled
        className={`${this.props.todo.completed ? "finished-task" : null}`}
        onClick={() => onTaskComplete(this.props.todo.id)}
      >
        {todo.task}
      </TodoStyled>
    );
  }
}

export default Todo;
