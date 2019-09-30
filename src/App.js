import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
const initialtodoData = 
  {
    task: '',
    // completed: false
  } 


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props){
    super(props);
    this.state = {
      todos: [ 
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
    ],
      task: ''
    }  
  }

  onInputChange = event => {
    this.setState({
      task: event.target.value 
    }   
  )
  }

  onAddTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
   const newTodoList = this.state.todos.concat(newTodo);
    this.setState({todos: newTodoList})
    this.setState({task : initialtodoData})
    console.log(newTodoList);
  };

  onTaskComplete = currentId => {
  
        let newTodoList = this.state.todos.slice();
       newTodoList = newTodoList.map(todo => {
          if (currentId === todo.id){
            todo.completed = !todo.completed;
            return todo;
          }
          else {
            return todo;    
          }
        });

        this.setState({todos: newTodoList})
        console.log(newTodoList);
      }
  

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList onTaskComplete={this.onTaskComplete}
                  todoList={this.state.todos} />
        <TodoForm onInputChange={this.onInputChange}
                  onAddTodo={this.onAddTodo}/>
      </div>
    );
  }
}

export default App;
