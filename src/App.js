import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: auto;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background: #128b7b;
  color: #d8d3d3;
  padding-bottom: 2rem;
  html {
    font-size: 62.5%;
  }
`;

const initialtodoData = {
  task: "",
  // completed: false
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task: "",
    };
  }

  onInputChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  onAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    };

    const newTodoList = this.state.todos.concat(newTodo);
    this.setState({ todos: newTodoList });
    localStorage.setItem("todos", newTodoList);
    this.setState({ task: "" });
    console.log(newTodoList);
  };

  onTaskComplete = (currentId) => {
    let newTodoList = this.state.todos;
    newTodoList = newTodoList.map((todo) => {
      if (currentId === todo.id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos: newTodoList });
    console.log(newTodoList);
  };

  onClearCompleted = (event) => {
    event.preventDefault();
    let newTodoList = this.state.todos;
    newTodoList = newTodoList.filter((todo) => todo.completed === false);
    this.setState({ todos: newTodoList });
  };

  render() {
    return (
      <StyledApp>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          onTaskComplete={this.onTaskComplete}
          todoList={this.state.todos}
        />
        <TodoForm
          task={this.state.task}
          onInputChange={this.onInputChange}
          onAddTodo={this.onAddTodo}
          onClearCompleted={this.onClearCompleted}
        />
      </StyledApp>
    );
  }
}

export default App;
