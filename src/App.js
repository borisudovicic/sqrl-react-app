import Routes from "./routes";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoggedInUser } from "./redux/actions/loggedInUserAction";

class App extends Component {

  componentWillMount() {
    //upon app load, check if browser cookie has a logged in user so we can load their shit
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
        if(result.loggedIn) {
          this.props.onUpdateLoggedInUser(result.user);
        
        } else {
          this.props.onUpdateLoggedInUser(null);
        }
      })
  }

  render() {
    return( <Routes /> );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
})

const mapActionsToProps = {
  onUpdateLoggedInUser: updateLoggedInUser //to prevent variable collisions with naming, use on
}

export default connect(mapStateToProps, mapActionsToProps)(App);