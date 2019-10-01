import React from 'react';

class TodoForm extends React.Component {
    render() {
        const {onInputChange, onAddTodo,onClearCompleted} = this.props;
        return(
            <form>
                <input value ={this.props.task}
                type='text' placeholder='...todo' onChange={onInputChange}/>
                <button onClick={onAddTodo}>Add Todo</button>
                <button onClick={onClearCompleted}>Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;