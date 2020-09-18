import React, {Component} from 'react';
import Todo from './Todo'
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      list: [],
      userInput: ''
    }
    this.addToList = this.addToList.bind(this);
  }

handleChange(val){
  this.setState({userInput: val})
}
addToList(){
  this.setState({
    list: [...this.state.list, this.state.userInput],
    userInput: ''
  })
}

  render(){
    let list = this.state.list.map((e,i)=> {
      return <Todo key={i} task={e} />
    })
    return(
      <div>
        <h1>My to-do list:</h1>
          <div>
            <input 
            value={this.state.userInput}
            onChange={(e) => this.handleChange(e.target.value)} 
            placeholder = "Enter new task"></input>
            <button onClick={this.addToList}>Add</button>
          </div>
          

        {list}
      </div>

    )
  }
  
}


