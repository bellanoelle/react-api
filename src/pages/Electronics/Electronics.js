import React, { Component } from 'react';
import GetApi from '../../components/GetApi';

class Electronics extends Component {
  render() {
    return (
      <div>
      <div className="col-5"></div>
      <div className="col-3"><h2>Elektronik</h2></div>
      <div className="col-4"></div>
      <GetApi source="../products.json" filterOrder="elektronik"/>
      </div>
    );
  }
}

export default Electronics;