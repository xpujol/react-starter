import React, { Component } from 'react';
//import UzInput from '../uz/uz-input';

import {
  Row,
  Column,
  Menu,
  MenuItem,
  Alignments,
//  Colors,
//  Button
} from 'react-foundation';
import './_list.scss';

export class List extends Component {
/*
  constructor() {
    super();
    this.state = {

    };
  }
*/
  render() {

    const menuItems = ['Meri', 'Patxi', 'Xevi', 'Patri', 'Carles'];

    return <div>
      <Row className="list-header">
        <Column large={2} >
          <img src="https://manager1.userzoom.com/assets/images/logo.png"/>
        </Column>
        <Column large={10} >
          <Menu alignment={Alignments.RIGHT}>
            {menuItems.reverse().map((item, i) => <MenuItem key={i}><a>{item}</a></MenuItem>)}
          </Menu>
        </Column>
      </Row>

      <Row className="list-main">
        <Column large={12}>
          <Row className="list-tab large-text-center">
            <Column large={4}><a href="#">Cosa 1</a></Column>
            <Column large={4}><a href="#">Cosa 2</a></Column>
            <Column large={4}><a href="#">Cosa 3</a></Column>
          </Row>
          <Row>
            <Column large={3} >
              <Row className="list-sidebar">
                <Menu isVertical>
                  {Array.apply(null, { length: 20 }).map((item, i) =>
                    <MenuItem key={i}><i className="fa fa-plus"></i><span>Table Row</span></MenuItem>)}
                </Menu>
              </Row>
            </Column>
            <Column large={9} >
              <Row className="list-content" />
            </Column>
          </Row>
        </Column>

      </Row>

    </div>;
  }
}

export default List;
