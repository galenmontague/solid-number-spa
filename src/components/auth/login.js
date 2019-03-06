import React, { Component } from 'react';
import Axios from 'axios';
import logo from '../../../static/assets/solidnumber.png'


export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentYear: new Date().getFullYear(), 
      email: '',
      password: ''
    };
    // BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({
    //   [event.target.name]: event.target.value,
    //   errorText: ''
    // });
  }

  handleSubmit(event) {
    // Axios.post('https://api.devcamp.space/sessions',
    // {
    //   client: {
    //     email: this.state.email,
    //     password: this.state.password,
    //     errorText: ''
    //   }
    // },
    // { 
    // withCredentials: true })
    // .then( res => {
    //   if (res.data.status === 'created') {
    //     this.props.handleSuccessfulAuth();
    //   } else {
    //     this.props.handleUnsuccessfulAuth();
    //     this.setState({ errorText: 'Wrong Email or Password' })
    //   }
    //   })
    // .catch( err => {
    //   this.setState({ errorText: 'An Error Has Occured'})
    //   this.props.handleUnsuccessfulAuth();
    //   console.log(err)
    // });
    // event.preventDefault();
    {/* <div> { this.state.errorText } </div> */}
  }

  render() {
    return (
      <div>
        <div className="login-form">
          <div className="image-wrapper">
            <img src={logo} height="50"/>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="base-input"
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <input
              className="base-input"
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div className="copy-wrapper">
          &copy; { this.state.currentYear } <a href="https://solidnumber.com">SolidNumber</a>
        </div>
      </div>
    );
  }
}