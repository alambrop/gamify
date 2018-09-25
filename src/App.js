import React, { Component } from 'react';
import './CSS/App.css';
import LoginForm from './Modules/LoginForm'


class App extends Component {
  render() { 
    return (
      <div className= "white-square-container">
        <body>
          <p className= "white-square">   <LoginForm /></p>  
        </body>      
      </div>
     
    );
  }
}
  
export default App; 