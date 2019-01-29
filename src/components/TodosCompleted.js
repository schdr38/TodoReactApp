import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItemCompleted from './TodoItemCompleted';
class TodosCompleted extends Component {
	render() {
		return this.props.todos.filter(todo=>todo.completed===true).map((todo)=>(
      
			<li key={todo.id}>
				<TodoItemCompleted  key={todo.id} todo={todo}/>
			</li>
		));
   
	}
}
TodosCompleted.propTypes={
	todos:PropTypes.array.isRequired
};
export default TodosCompleted;
