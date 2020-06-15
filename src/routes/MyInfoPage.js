import React, { Component } from 'react';
// import { Table, Grid } from 'reactstrap';
import MyNavbar from '../components/Navbar';
import Constants from '../assets/Constants';

class MyInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  // componentWillMount() {
  //   fetch(Constants.apiRoute+'/mypacks', {credentials: 'same-origin'})
  //     .then(result => result.json())
  //     .then(result => {
  //       // console.log(result);
  //       this.setState({ mypacks: result.packs });

  //     })
  // }

  render() {
    return (
      <div>
        <h1>My info page</h1>
      </div>
    );
  }
}

export default MyInfoPage;