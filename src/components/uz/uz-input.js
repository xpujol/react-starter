import React, { Component } from 'react';
import {
  Row,
  Column,
} from 'react-foundation';

export class UzInput extends Component {
  render() {
    const { label, id, placeholder, value, columnProps, onChange, type = 'text' } = this.props;

    return (
      <Row>
          <Column {...columnProps}>
              <label htmlFor={id}>{label}</label>
              <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
          </Column>
      </Row>
    );
  }
}

export default UzInput;
