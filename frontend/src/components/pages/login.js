import React, { Component } from 'react'
import './pages.css';
import { Link } from 'react-router-dom';

export class Login extends Component{
  state = {
    username: '',
    password: '',
    errors: {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick =(e) => {
    e.preventDefault();
    if(this.handleValidation()){

    }else{
    
    }
  };

  handleValidation(){
    let username = this.state.username;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;

    if(!username){
      formIsValid = false;
      errors["username"] = "Username can not be empty";
    }
    
    if(!password){
      formIsValid = false;
      errors["password"] = "Password can not be empty";
    }

    this.setState({errors: errors});
    return formIsValid;
    }

  render() {
    return (
      <React.Fragment>
          <div className="loginRegisterContainer">
              <h1>Sign in</h1>
              <form>
              <label>
                  Username:<br/>
                  <input className="loginInput" type="text" value = {this.state.username} name="username" onChange={this.onChange}/>
              </label><br/>
              <span style={{color: "red"}}>{this.state.errors["username"]}</span><br/>
              <label>
                  Password:<br/>
                  <input className="loginInput" type="password" value = {this.state.password} name="password" onChange={this.onChange}/>
              </label><br/>
              <span style={{color: "red"}}>{this.state.errors["password"]}</span><br/>
              <input className="submitButton" type="submit" value="Login" onClick={(event) => this.handleClick(event)}/>
              </form>
              <Link className="link" to="/register">Register new user</Link>
          </div>    
      </React.Fragment>
    )
  } 
}


export default Login;