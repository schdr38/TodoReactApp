import React, { Component } from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
class CurrentDate extends Component {
     monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  today = new Date();
   date = this.today.getDate() + " "+ this.monthNames[this.today.getMonth()] +" "+this.today.getFullYear();
  render() {
   

   return  <div>
       
       <Typography variant="h5" >{this.date}</Typography>

       </div>

   
  }
}

export default CurrentDate;
