import React, {Component} from 'react'
import NewTask from "./NewTask"
import List from "./List"
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      list:[]
    }
    this.addToList = this.addToList.bind(this)
  }

  addToList(input){
    this.setState({list: [...this.state.list, input]})
  }

  render(){
      return (
        <div>
          <h1>My to-do list:</h1>
          <NewTask add={this.addToList}/>
          <List tasks={this.state.list}/>
         </div>
      )
  }
}