import React, { Component } from 'react';
import GetApi from '../../components/GetApi';

class Home extends Component {
  render() {
    return (
      <div>
      <div className="col-4 orange">Jobba på Beta</div>
      <div className="col-4 orange">Kontakta oss: 0722-93 93 93</div>
      <div className="col-4 orange">Reservera och hämta i varuhus</div>
      <div className="col-1"></div>
      <div className="col-10"><img src="https://st.bygghemma.se/cmsmedia/media/2213/foretagtop.jpg" /></div>
      <div className="col-1"></div>
      <div className="col-12"><h2>Prisvärda produkter</h2></div>
      <GetApi source="../products.json" filterOrder="budget"/>
      </div>
    );
  }
}

export default Home;