// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{
    render() {
        const {todoList} = this.props;
        return (
            todoList.map((todo) =>(
             <div key={todo.id}>
             <Todo task={todo.task}/>
            </div>
        ))
      
       )
    }
}

export default TodoList;