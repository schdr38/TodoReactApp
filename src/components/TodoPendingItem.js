import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import InputBase from '@material-ui/core/InputBase';

export class TodoItem extends Component {

  state ={
    borderLeft:''
  }

  //varsayılan eleman değerleri
    getStyle= ()=>{

    return {
        background:'white',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration:this.props.todo.completed?
        'line-through':'none',

    }
  }
  render() {
    const {id,title,completed} = this.props.todo;

    return (
      <div style={this.getStyle()} >
        <FormControlLabel
        control={
          <div>
     <Checkbox checked={completed}
           onChange={this.props.markComplete.bind(this,id)}
           style={checkBoxStyle}
           icon={<CircleUnchecked />}
  checkedIcon={<CircleCheckedFilled
     />
  }
           />
           <InputBase  onChange={this.props.updateTodo.bind(this,id)}  defaultValue={title} onClick={this.props.chooseTodo.bind(this,id)} />
          </div>
     
           
        }
      />
         
           <button  style={btnStyle} 
           onClick={this.props.deleteTodo.bind(this,id)}
           
           
           >X</button>
      </div>
    )
  }
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}

const btnStyle = {
  color:'gray',
  border:'none',
  padding:'5px 10px',
  cursor:'pointer',
  float:'right'

}
const checkBoxStyle={
  borderRadius:'',

}



export default TodoItem
