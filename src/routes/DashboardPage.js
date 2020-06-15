import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';
import AnimateHeight from 'react-animate-height';
import { Table } from 'reactstrap';
import AppNavbar from '../components/AppNavbar';
import { updateLoggedInUser } from '../redux/actions/loggedInUserAction';

class DashboardPage extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal: false
    }
  }
  render() {
    return (
      this.props.loggedInUser==null ? <Redirect to="/" /> :
      <div>
        <AppNavbar />
        <h1>Dashboard page</h1>
        <Table>
        <thead>
          <tr>
            <th>classname</th>
            <th>Professor</th>
          </tr>
        </thead>
        <tbody>
        {JSON.parse(this.props.loggedInUser.classList).map((item, index) => {
          return(
            <tr>
            <td>{item.name}</td>
            <td>{item.professorName}</td>
          </tr>
          )
        })}
                </tbody>
        </Table>

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

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DashboardPage);