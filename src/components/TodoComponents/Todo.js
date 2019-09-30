import React from 'react';


class Todo extends React.Component{
    render() {
        const {task} = this.props;
        return(
            <div>{task}</div>
        )
    }
}

export default Todo;