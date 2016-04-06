import React, { Component } from 'react';
import UzInput from '../uz/uz-input';
import {
  Row,
  Column,
  Colors,
  Button
} from 'react-foundation';

export class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onInputChange(inputName, e) {
    const obj = {};
    obj[inputName] = e.target.value;

    this.setState(obj);
  }

  doValidate(e) {
    e.preventDefault();

    const { username, password } = this.state;

    if (!username.length || !password.length) {
      console.log('Please type a username and passowrd!');
      return false;
    }

    return this.props.signIn();
  }

  render() {

    const { username, password } = this.state;
    console.log(this.state);

    return (
      <Row className="login">
        <Column small={12}>
          <h1>Welcome to UserZoom upppercut</h1>
        </Column>
        <Column medium={4} small={12} centerOnMedium={true} >
          <form className="callout" onSubmit={this.doValidate.bind(this)}>
            <Row>
              <Column small={12}>
                <h2>Login form</h2>
              </Column>
            </Row>
                  <UzInput value={username} columnProps={{ small: 12 }} onChange={this.onInputChange.bind(this, 'username')} id="username" label="Username" placeholder="ojete@userzoom.com" />
                  <UzInput value={password} columnProps={{ small: 12 }} onChange={this.onInputChange.bind(this, 'password')} id="password" label="Password (not too safe, max 4 characters)" type="password" />
            <Row>
              <Column small={12}>
                <input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">Remember me!</label>
              </Column>
            </Row>
            <Row>
              <Column small={12}>
                <Button color={Colors.PRIMARY} float="right">Sign in</Button>
              </Column>
            </Row>
          </form>
        </Column>
      </Row>

    );
  }
}

export default Login;
