import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import { connect } from 'react-redux';
import { updateLoggedInUser } from "../redux/actions/loggedInUserAction";
import Constants from '../assets/Constants';
import logo from '../assets/img/sqrl-logo-small.png';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false,
    }
    
    this.toggle = this.toggle.bind(this);
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
      this.props.onUpdateLoggedInUser(null);
    })
  }

  toggle() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  render() {

    let currentNav = this.props.loggedInUser ? 
      <ul class="navbar-nav mr-auto">
        <li class={"nav-item "+ this.props.active=='dashboard' ? 'active' : ''}>
          <Link class="nav-link" to='/'>Dashboard</Link>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.loggedInUser.name}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div class="dropdown-item" onClick={() => alert('my info')}>My Info</div>
          <div class="dropdown-item" onClick={this.logoutUser.bind(this)}>Log out</div>
        </div>
        </li>
      </ul>
      :
      <ul class="navbar-nav mr-auto">
        <li class={"nav-item "+ this.props.active=='dashboard' ? 'active' : ''}>
          <Link class="nav-link" to='/dashboard'>Home</Link>
        </li>
      </ul>

    return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={styles.mainContainer}>
      <a class="navbar-brand" >
        <img src={logo} class="d-inline-block align-top" width="30" height="30" style={{marginRight:15}}/> 
        Sqrl
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {currentNav}
        {/* <div class="form-inline my-2 my-lg-0">
            <div><span>right side</span></div>
        </div> */}
      </div>
    </nav>

    );
  }
}

const styles = {
  mainContainer: {
    marginBottom: 15,
    backgroundColor: 'grey'
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
})

const mapActionsToProps = {
  onUpdateLoggedInUser: updateLoggedInUser //to prevent variable collisions with naming, use on
}

export default connect(mapStateToProps, mapActionsToProps)(AppNavbar);