import React, {Component} from 'react';
import './App.css';

export default class DisplayList extends Component{
  constructor(){
    super();
    this.state = {
      list: ["speghetti","ice cream","sushi","bologna","cheese",'cake']
    }
  }

  render(){
    const listMapped = this.state.list.map( (e,i) => {
      return(
        <h2 key={i}>{e}</h2>
      )
    })
    return (
      <div className="App">{listMapped}</div>
    );
  }
}


