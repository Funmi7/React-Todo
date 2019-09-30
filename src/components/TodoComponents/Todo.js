import React from 'react';
import './Todo.css';


class Todo extends React.Component{
    render() {
        const {todo, onTaskComplete} = this.props;
        return(
            <div
            className={`${this.props.todo.completed? 'finished-task': null}`}
            onClick={() => onTaskComplete(this.props.todo.id)}
            >
            {todo.task}
            </div>
        )
    }
}

export default Todo;