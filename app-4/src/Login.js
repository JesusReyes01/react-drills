import React, {Component} from 'react'
// import './App.css';


export default class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        };
        //this.alert = this.alert.bind(this);
    }
usernameInput(val){
    this.setState({username: val});
}
passwordInput(val){
    this.setState({password: val});
}
alert(username, password){
    alert(`Your username and password have been compromised! You have been phished! Username: ${username} Password: ${password} `)

}
    render(){

        return(
            <div>
            <input onChange={(e) => this.usernameInput(e.target.value)} placeholder="Enter Username"></input>
            <input onChange={(e) => this.passwordInput(e.target.value)} placeholder="Enter Password"></input>
            <button onClick={() => this.alert(this.state.username, this.state.password)}>Enter</button>
            </div>
        )
    }
}
