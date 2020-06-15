import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//assets
import logo from '../assets/img/sqrl-logo-header.png';
import MyNavbar from '../components/Navbar';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      message: '',
    }
  }
  
  submitForm(){
    if(this.state.email.length>1 && this.state.message.length > 4){
    console.log('submitting fomr...')
      fetch('/acceptform', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({email: this.state.email, name: this.state.name, message: this.state.message})
        })
        .then(result => {
          if(result.status=='success'){
            alert('Message sent')
          }
        })

    }else{
      alert('Invalid contact form');
    }
  }


  render() {
    return (
      <div>
        <MyNavbar />
        <title>Sqrl</title>
        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-lg-4 my-auto">
                <div class="header-content mx-auto">
                  <h1 class="mb-5">Say Hello!</h1>
                  <span>Or <a  style={{color: 'white'}} href='mailto:info@sqrl.chat'>info@sqrl.chat</a></span>
                </div>
              </div>

              <div class="col-lg-8 my-auto">
                <div class="container">
                  <div class="row">
                      <div class="col-md-11 col-md-offset-1">
                        <div class="well well-sm">
                          <div class="form-horizontal">
                          <fieldset>
                    
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="name">Name</label>
                              <div class="col-md-9">
                                <input value={this.state.name} onChange={(x) => this.setState({name: x.target.value})} id="name" name="name" type="text"  class="form-control"/>
                              </div>
                            </div>
                        
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="email">E-mail</label>
                              <div class="col-md-9">
                                <input value={this.state.email} onChange={(x) => this.setState({email: x.target.value})} id="email" name="email" type="text"  class="form-control"/>
                              </div>
                            </div>
                        
                            <div class="form-group">
                              <label class="col-md-3 control-label" for="message">Message</label>
                              <div class="col-md-9">
                                <textarea onChange={(x) => this.setState({message: x.target.value})} class="form-control" id="message" name="message" placeholder="..." rows="5"></textarea>
                              </div>
                            </div>
                    
                            <div class="form-group">
                              <div class="col-md-12 text-right">
                                <button class="btn btn-primary btn-lg" onClick={this.submitForm.bind(this)} >Submit</button>
                              </div>
                            </div>
                          </fieldset>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>

        <footer>
          <div class="container">
            <p>&copy; 2017 Sqrl</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default ContactPage;