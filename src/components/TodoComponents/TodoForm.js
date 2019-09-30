import React from 'react';

class TodoForm extends React.Component {
    render() {
        const {onInputChange, onAddTodo, value} = this.props;
        return(
            <form>
                <input
                value={value} 
                type='text' placeholder='...todo' onChange={onInputChange}/>
                <button onClick={onAddTodo}>Add Todo</button>
                {/* <button onClick>Clear Completed</button> */}
            </form>
        )
    }

}

export default TodoForm;