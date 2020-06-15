import React, {Component} from 'react';
import {Table, Grid, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//my components
import MyNavbar from '../components/Navbar';

//assets

import '../assets/simple-line-icons/css/simple-line-icons.css';
import '../assets/device-mockups/device-mockups.css';
import sqrl_sample_chat_img from '../assets/img/sqrl_sample_chat_img.png';
import sqrl_homepage_example from '../assets/img/sqrl_homepage_example.png';

const iphone6 = require("../assets/device-mockups/iphone_6/iphone_6_port_black.png");

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          phoneNumber: ''
        }
    }

  isNumberKey(evt) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lastChar = evt.target.value[evt.target.value.length-1];
    if (lastChar in numbers || lastChar == null && this.state.phoneNumber.length<11){
      this.setState({phoneNumber: evt.target.value});
    }
  }


    render() {
        return (
          this.props.loggedInUser ? <Redirect to="/dashboard"/> : 
            <div>
                <title>Sqrl</title>

                <MyNavbar />


                <header class="masthead">
                  <div class="container h-100">
                    <div class="row h-100">
                      <div class="col-lg-7 my-auto">
                        <div class="header-content mx-auto">
                          <h1>Sqrl is Auto-Populated Group Chats for All Your Classes</h1>
                          {/* <!-- <h1 style="margin-top: 15px;" class="mb-5"></h1> --> */}
                          <div class="container">
                            <div class="row">
                              <div class="col-12">
                                <div class="row" id='badgeWrapper'>
                                  <a class="badge-link col-12 col-lg-6" onClick="sqrlAlert()" ><img src={require('../assets/img/app-store-badge.svg')} alt=""/></a>
                                  <a class="badge-link col-12 col-lg-6" onClick="sqrlAlert()" ><img src={require('../assets/img/google-play-badge.svg')} alt=""/></a>
                                </div>
                                <div class='col mx-auto' id='formcard'>
                                  <h5 class='mx-auto' style={{ fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Text a download link to your phone</h5>
                                  <div  class='form-inline' name='textform' id='textform' >
                                    <div class="form-group row mx-auto">
                                      <input type="text" maxLength={10} class="form-control" value={this.state.phoneNumber} onChange={(x) => this.isNumberKey(x)}  id="phoneNumber" name='phoneNumber' placeholder="8005551234"  />
                                      <Button  color='primary' disabled={this.state.phoneNumber.length==10 ? false : true} onClick={() => alert('Sqrl is not available for download yet.')}  id='sendTextButton' name='sendTextButton' style={{ marginLeft:10}} class="btn btn-primary">Text Me!</Button>
                                    </div>
                                    <small class='mx-auto blackText col-12' style={{textAlign:'center'}} >10 digit US number</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div class="col-lg-5 my-auto">
                        <div class="device-container">
                          <div class="device-mockup iphone6 portrait white"  style={{backgroundSize: 'contain', backgroundImage: 'url('+iphone6+')'}}>
                            <div class="device" id="phone1">
                              <div class="screen">
                                <img src={sqrl_sample_chat_img} style={{ width:'101.5%'}}/>
                              <div class="button">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </header>


                {/* <!-- The dots/circles -->
                <!--  <div style="text-align:center">
                  <span class="dotImage" onclick="currentSlide(1)"></span>
                  <span class="dotImage" onclick="currentSlide(2)"></span>
                  <span class="dotImage" onclick="currentSlide(3)"></span>
                </div>  --> */}

                <section class="features" id="features">
                  <div class="container">
                    <div class="section-heading text-center">
                      <h2>The Best Way to Connect With Your Classmates</h2>
                      {/* <!-- <p class="text-muted">Check out some of the features!</p> --> */}
                      <hr/>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 my-auto">
                        <div class="device-container">
                          <div class="device-mockup iphone6 portrait black" style={{backgroundSize: 'contain', backgroundImage: 'url('+iphone6+')'}}>
                            <div class="device">
                              <div class="screen">
                                {/* <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! --> */}
                                <img src={sqrl_homepage_example} style={{width: '100%'}}/>
                              </div>
                              <div class="button">
                                {/* <!-- You can hook the "home button" to some JavaScript events or just remove it --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8 my-auto">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="feature-item">
                                <i class="icon-check text-primary"></i>
                                <h3>No Sign-Up Process</h3>
                                <p class="text-muted">Login to Sqrl Using Your University Email and Password</p>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="feature-item">
                                <i class="icon-bubbles text-primary"></i>
                                <h3>Better Than Email</h3>
                                <p class="text-muted">Share Pictures, Notes, and Collaborate!</p>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="feature-item">
                                <i class="icon-screen-smartphone text-primary"></i>
                                <h3>No Phone Numbers Required</h3>
                                <p class="text-muted">Communicate Effortlessly</p>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="feature-item">
                                <i class="icon-list text-primary"></i>
                                <h3>All Your Classes, in One Place</h3>
                                <p class="text-muted">Engage With Your Peers on One Platform</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                <footer>
                  <div class="container">
                    <p>&copy; 2017 Sqrl LLC</p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href='mailto:info@sqrl.chat'>Contact: info@sqrl.chat</a>
                        <br/>
                      </li>
                    </ul>
                  </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(Homepage);