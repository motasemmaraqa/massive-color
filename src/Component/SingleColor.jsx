import React, { Component } from 'react';
import Palette from './Palette';

export class SingleColor extends Component {
  render() {
    return (
      <>
        <Palette {...this.props} isSingleColor />
      </>
    );
  }
}

export default SingleColor;
