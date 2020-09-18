import React, {Component} from 'react';

import './App.css';

export default class DisplayListLive extends Component{
  constructor(){
    super();
    this.state = {
      filterInput: '',
      list: [
        "apples",
        "grapes",
        "pineapple",
        "pears",
        "strawberries",
        "plums"
      ]
    }
  }

  handleChange(val){
    return(
      this.setState({filterInput: val})
    )
  }
  render(){

    let filteredList = this.state.list
    .filter((e,i) => {
      return e.includes(this.state.filterInput)})
    .map( (e,i) => {
      return  (<h2 key={i}>{e}</h2>)
      })
    
    return(
      <div>
      <input onChange={ (e) => this.handleChange(e.target.value)}></input>
      <span>{filteredList}</span>
      
      </div>


    )
  }

}
 

