import React, { Component } from 'react';
import GetApi from '../../components/GetApi';

class Best extends Component {
  render() {
    return (
      <div>
      <div className="col-5"></div>
      <div className="col-3"><h2>Bäst i test</h2></div>
      <div className="col-4"></div>
      <GetApi source="../products.json" filterOrder="bäst-i-test"/>
      </div>
    );
  }
}

export default Best;