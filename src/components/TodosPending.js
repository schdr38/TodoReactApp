import React, { Component } from 'react';
import TodoItem from './TodoPendingItem';
import PropTypes from 'prop-types';
class Todos extends Component {

  state = {
    borderLeft: '',
    selectedId:0
  }

  
  chooseTodo= (id)=>{
    this.setState({selectedId:id})

  }
  render() {
   


  return this.props.todos.map((todo)=>(
      
      <li key={todo.id} style={{borderLeft:this.state.selectedId===todo.id?'5px red solid':' '}}
      >
      
      <TodoItem  key={todo.id} todo={todo}
       markComplete={this.props.markComplete}
       chooseTodo={this.chooseTodo}
      updateTodo={this.props.updateTodo}
      deleteTodo={this.props.deleteTodo}
/>
      </li>
   
    
    ));
   
  }
}
Todos.propTypes={
  todos:PropTypes.array.isRequired
}
export default Todos;
