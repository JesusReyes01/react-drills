import React, {Component} from 'react'


export default class Image extends Component {
  
    render(){
        return(
            <div>
            <img src={this.props.url} ></img>
            <div>Pumpkin</div>
            </div>

        )
    }
}