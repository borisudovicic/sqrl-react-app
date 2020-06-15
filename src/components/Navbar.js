import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, NavItem, Nav, Modal, Button, DropdownMenu, DropdownItem } from "reactstrap";
import LoginModal from './modals/LoginModal';
import { connect } from 'react-redux';
import { updateLoggedInUser } from "../redux/actions/loggedInUserAction";
import Constants from '../assets/Constants';
import logo from '../assets/img/sqrl-logo-header.png';

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegisterModal: false
    }
    // this.checkIfLoggedIn();
  }


  checkIfLoggedIn(){
    fetch('/getuser', {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(result => {
      console.log(result.loggedIn)
      if(result.loggedIn){
        this.props.onUpdateLoggedInUser(result.user);
      }else{
        this.props.onUpdateLoggedInUser(null);
      }
    })
  }

  logoutUser(){
    fetch('/logout', {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    // .then(result => result.json())
    .then(result => {
      this.checkIfLoggedIn();
    })
  }

  render() {
    console.log(this.props.loggedInUser+' logged in user')

    let login = this.props.loggedInUser!=null ?
      <DropdownMenu eventKey="4" title={"Welcome, "+this.props.loggedInUser.name} id="nav-dropdown">
        <DropdownItem eventKey="4.1">My Info</DropdownItem>
        <DropdownItem eventKey="4.2" onClick={this.logoutUser.bind(this)}>Logout</DropdownItem>
      </DropdownMenu> 
      :
      <Link to="/login" class='nav-link'>Log In</Link>;



    return (

      <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} style={{height: 45}} /></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to='/' class="nav-link js-scroll-trigger">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class='nav-link'>Contact</Link>
                </li>
                <li class="nav-item">
                  {login}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

const styles = {
  navbar: {
    marginBottom: 0
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
})

const mapActionsToProps = {
  onUpdateLoggedInUser: updateLoggedInUser //to prevent variable collisions with naming, use on
}

export default connect(mapStateToProps, mapActionsToProps)(MyNavbar);