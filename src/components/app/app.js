/*eslint no-unused-vars: 0*/

import React, { Component } from 'react';
import { Login } from '../login/login';
import { List } from '../list/list';

export class App extends Component {
  constructor() {
    super();
    this.state = { logged: true };
  }
  signIn() {
    this.setState({ logged: true });
  }
  render() {
    return (
      <div className="app">
        {this.state.logged ? <List /> : <Login signIn={this.signIn.bind(this)} />}
      </div>
    );
  }
}
