import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import InputBase from '@material-ui/core/InputBase';

export class TodoItemCompleted extends Component {

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
    const {title,completed} = this.props.todo;
    return (
      <div style={this.getStyle()} >
        <FormControlLabel
        control={
          <div>
    
    <FormControlLabel
        control={
          <div>
     <Checkbox checked={completed}
           style={checkBoxStyle}
           icon={<CircleUnchecked />}
  checkedIcon={<CircleCheckedFilled />
  }
           />
           <InputBase  defaultValue={title} disabled={true} />
          </div>
     
           
        }
      />
          </div>
     
           
        }
      />
         
      </div>
    )
  }
}
TodoItemCompleted.propTypes={
    todo:PropTypes.object.isRequired
}
const checkBoxStyle={
  borderRadius:'50%',

}



export default TodoItemCompleted
