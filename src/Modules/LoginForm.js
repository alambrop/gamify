import React, { Component } from 'react';
import request from "request";


const UsernameComponent = ({username, userNameHandler}) => (
  <input type = "text" placeholder = "Username" value = {username} onChange = {userNameHandler} />
)

const PasswordComponent = ({password, passwordHandler}) => (
  <div>
    <input type = "password" placeholder = "Password" value = {password} onChange = {passwordHandler} />
  </div>
)

class LoginForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        clicked: false    
    }     
}

userNameHandler = e => {
  this.setState({
    username: e.target.value,
  });
}

passwordHandler = e => {
  this.setState({
    password: e.target.value,
  });
}

submitHandler = e => {
  e.preventDefault();
  if(!this.state.username) 
  {
    alert("Enter a username")
  }
  else if(!this.state.password)
  {
    alert("Enter a password")
  }
  else 
  {
    alert("Login successful");
    this.setState({
      clicked: !this.state.clicked 
    });
  } 
}



render() {
  return (
    <div>
      <h3 className='Login-Title'>Login</h3>
      <UsernameComponent username={this.state.username} userNameHandler={this.userNameHandler}/>
      <PasswordComponent password={this.state.password} passwordHandler={this.passwordHandler}/>
      <button onClick={this.submitHandler}> Login </button>
    </div>
  );
}
}

export default LoginForm