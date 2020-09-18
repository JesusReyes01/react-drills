import React, {Component} from 'react'

export default class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
        this.addList = this.addList.bind(this);
    }
    handleInput(val){
        this.setState({userInput: val})
    }
    addList(){
        this.props.add(this.state.userInput);
        this.setState({ userInput: ''})
    }
    render(){
        return (
          <div>
              <input 
              value={this.state.userInput}
              placeholder='Enter new task'
              onChange={(e)=> this.handleInput(e.target.value)}></input>
              <button onClick={this.addList}>Add</button>
           </div>
        )
    }
  }