import React from "react";
import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  html {
    font-size: 62.5%;
  }
  .input-div {
  }
  .input-form {
    width: 30rem;
    height: 4vh;
    border: 0.1rem solid rgb(20, 161, 143);
    margin-bottom: 3rem;
    padding: 1rem;
  }
  button {
    /* max-width: 7rem; */
    margin-left: 1rem;
    padding: 1.2rem;
    border: none;
    background: #e70c72;
    color: #d8d3d3;
  }
  @media screen and (max-width: 500px) {
    .input-form {
      width: 50%;
    }
  }
`;

class TodoForm extends React.Component {
  render() {
    const { onInputChange, onAddTodo, onClearCompleted } = this.props;
    return (
      <FormStyled>
        <form>
          <div className="input-div">
            <input
              className="input-form"
              value={this.props.task}
              type="text"
              placeholder="What do you need to do today?"
              onChange={onInputChange}
            />
            <button onClick={onAddTodo}>Add Todo</button>
          </div>

          <button onClick={onClearCompleted}>Clear Completed</button>
        </form>
      </FormStyled>
    );
  }
}

export default TodoForm;
