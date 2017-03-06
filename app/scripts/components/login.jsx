var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var parse = require ('../setup.js');
var User = require('../models/user').User;

class LoginContainer extends React.Component {
  constructor(props){
    super(props);
  }

  handleSignUpButton(credentials){
    var user = new User(credentials);
   // user.save() makes a post request to models base url
   user.save().then(function(data){
     localStorage.setItem('user', JSON.stringify(data));
     Backbone.history.navigate('recipelist/', {trigger: true});
   });
  }

  handleLoginButton(credentials){
    User.login(credentials, function(){
  Backbone.history.navigate('recipelist/', { trigger: true })
});
}

  render(){
    return(
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <h1>Welcome to the Batch Configuration Network!</h1>

            <div className="col-md-6">
              <LoginForm handleLoginButton={this.handleLoginButton.bind(this)} />
            </div>

            <div className="col-md-6">
              <SignUpForm handleSignUpButton={this.handleSignUpButton.bind(this)} />
            </div>

          </div>
        </div>
      </div>
      )
    }
  }


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(e) {
    this.setState( {username: e.target.value});
  }

  handlePassword(e) {
    this.setState( {password: e.target.value });
  }

  handleLogin(e){
    e.preventDefault();
    this.props.handleLoginButton(this.state);
  }


  render(){

    return (
  <div>
    <h1>Please Login</h1>
      <form id="login">
       <div className="form-group">
         <input value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="Email" onChange={this.handleUsername} />
       </div>

       <div className="form-group">
         <input value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Enter Password" onChange={this.handlePassword}/>
       </div>

       <input className="btn btn-primary" type="submit" value="Login"  onClick={this.handleLogin}  />
     </form>
  </div>
    )
  }
}


class SignUpForm extends React.Component {
  render(){
    return (
    <div>
      <h1>Please SignUp</h1>
        <form id="login">
         <div className="form-group">
           <input className="form-control" name="email" id="email-login" type="email" placeholder="Email" />
         </div>

         <div className="form-group">
           <input className="form-control" name="password" id="password-login" type="password" placeholder="Enter Password" />
         </div>

         <input className="btn btn-primary" type="submit" value="Login"  onClick={this.props.handleSignUpButton}  />
       </form>
    </div>
    )
  }
}

module.exports = {
  LoginContainer
}
