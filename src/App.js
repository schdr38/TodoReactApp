import React, { Component } from 'react';
import TodosPending from './components/TodosPending';
import './App.css';
import CurrentDate from './components/currentDate'
import { Typography, Fab } from '@material-ui/core';
import TodosCompleted from './components/TodosCompleted';
import AddIcon from '@material-ui/icons/Add'
class App extends Component {
  state = {
    todos:[
      {
       id:1,
       title:'Ödev yapılacak',
       completed:false
      },
      {
        id:2,
        title:'Ödev yapılacak 2',
        completed:true
       },
       {
        id:3,
        title:'Ödev yapılacak 3',
        completed:false
       },
    ],
  }
  //helper methods
  createNewTodo=()=>{
    const todosLength = this.state.todos.length
    const lastId = this.state.todos[todosLength-1].id
    const newTodo = {id:lastId+1,title:' ',completed:false}
    return newTodo;
  }





  markComplete =(id)=>{
    const todos = this.state.todos;
    todos.map(todo=>{
      if(todo.id===id)
        todo.completed=true
      return todo;
    })
    this.setState({todos:todos});

  }
  //Update todo
  updateTodo=(id,e)=>{
    const todos = this.state.todos.map(todo=>{
      if(todo.id===id)
        todo.title = e.target.value
      return todo;
    })
    this.setState({todos:todos})
  }

  addTodo(e) {
   const  todos = this.state.todos;
    todos.push(this.createNewTodo())
    this.setState({todos:todos})
  }

  
  deleteTodo=(id)=>{

    const newTodos = this.state.todos.filter(todo=>todo.id!==id)
    console.log(newTodos)
    this.setState({ todos: newTodos });
  }


  render() {
    const uncompletedTodos=this.state.todos.filter(todo=>todo.completed===false)
    const completedTodos=this.state.todos.filter(todo=>todo.completed===true)
    return (
      <div className="container">
        
        
        
     <CurrentDate />
     <br></br>

     <Typography color="secondary" variant="caption">{uncompletedTodos.length} Pending Tasks </Typography>
     <br></br>
     <br></br>
     <Typography style={{color:'gray'}} variant="caption">PENDING</Typography>
     <ul className="todoPendingList">
     <TodosPending  todos={uncompletedTodos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} markComplete={this.markComplete}/>
     
     

     </ul>
     <Typography style={{color:'gray'}} variant="caption">COMPLETED</Typography>

      <ul className="todoCompletedList">

     <TodosCompleted  todos={completedTodos}  markComplete={this.markComplete}/>
     <div className="buttonContainer">
     
     
     <Fab className="button" color="secondary" onClick={()=>{this.addTodo()}} aria-label="Add">
   <AddIcon/>
    </Fab>     
     </div>
      
      
      </ul>


   
      
      </div>

    );
  }
}

export default App;
