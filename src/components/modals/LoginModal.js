import React, {Component} from 'react';
import Constants from '../../assets/Constants';
import AnimateHeight from 'react-animate-height';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  loginUser() {
    if(this.state.email.length>1 && this.state.password.length > 4){
      fetch(Constants.apiRoute + '/login', {
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
            this.props.checkIfLoggedIn();
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

  closeModal(){
    this.props.hideModal();
    this.setState({error: '', email: '', password: ''});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    
    return (
      <div>
      <Modal isOpen={this.props.showModal} toggle={this.toggle}>
          <h1>hi</h1>
        </Modal>
</div>

    );
  }
}

const styles = {
  form: {
    marginLeft: 30,
    marginRight: 30
  }
}

export default LoginModal;