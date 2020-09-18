import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import Image from "./Image"

export default class App extends Component{
    render(){
      return(
        <div>
          <Image url={'https://scatterjar.com/wp-content/uploads/2016/09/www.scatterjar.com-3845-350x233.jpg'} />
          </div>
      )
    }
}


