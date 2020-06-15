import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import AppNavbar from '../components/AppNavbar';
import '../assets/css/login.css';
import { Link, Redirect } from 'react-router';
import { updateLoggedInUser } from '../redux/actions/loggedInUserAction';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  loginUser() {
    if(this.state.email.length>1 && this.state.password.length > 4){
      fetch('/login', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({email: this.state.email, password: this.state.password})
        })
        .then(result => result.json())
        .then(result => {
          console.log(result+' RESULT');
          if(result.status=='success'){
            this.props.onUpdateLoggedInUser(result.user);
            this.setState({
              email: '',
              password: '',
            });

          }else{
            alert(result.message)
          }
        })

    }else{
      this.setState({error: "Please enter a valid email and password"});
    }

  }

  render() {
    return (
      this.props.loggedInUser ? <Redirect to='/dashboard' /> :
      <div>

        <AppNavbar />
        <div id='bodydiv' class="text-center">
          <div class="form-signin">
            <img class="mb-4" src={require('../assets/img/sqrl-logo-small.png')} alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal">Sign in using your .edu email and password</h1>
            <label for="inputEmail" class="sr-only">.edu Email</label>
            <input type="email" class="form-control" placeholder="email" required autofocus value={this.state.email} onChange={(x) => this.setState({email: x.target.value})}/>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required value={this.state.password} onChange={(x) => this.setState({password: x.target.value})}/>

            <button class="btn btn-lg btn-primary btn-block" onClick={this.loginUser.bind(this)}>Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
})

const mapActionsToProps = {
  onUpdateLoggedInUser: updateLoggedInUser //to prevent variable collisions with naming, use on
}

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);