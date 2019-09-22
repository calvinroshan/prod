import React, { Component } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid';


class App extends Component{
  state = {
    todos:[
      {
        id: uuid.v4(),
        title: 'meeting with mom',
        completed:false
      },
      {
        id: uuid.v4(),
        title: 'meeting with brother',
        completed:false
      },
      {
        id: uuid.v4(),
        title: 'meeting with son',
        completed:false
      }
    ]
  }
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
         todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  delTodo = (id) =>{
   this.setState({todos: [...this.state.todos.filter(todo => todo.id!== id) ]});
  }
  addTodo = (title) =>{
    const newTodo = {
        id: uuid.v4(),
        title,
        completed:false
    }
    this.setState({todos: [...this.state.todos,newTodo]});
  }
  render(){
    return(
      <div className="App">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
