// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';



class TodoList extends React.Component{
    render() {
        const {todoList, onTaskComplete} = this.props;
        return (
            todoList.map((todo) =>(
             <Todo 
             onTaskComplete={onTaskComplete}
             key={todo.id}
             todo={todo}
             />
        ))
      
       )
    }
}

export default TodoList;