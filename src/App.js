import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

//import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
          
        <div>
        <div className="col-6"><img src="http://www.peerless-betatools.com/img/beta-logo.png" />
        </div>
        <div className="col-6"></div>
        <div className="col-6"></div>
        <ul className="col-12">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/Electronics">Elektronik</Link></li>
          <li><Link to="/Clothes">Kläder</Link></li>
          <li><Link to="/Tools">Verktyg</Link></li>
          {/*<li><Link to="/sadad">Bad Link</Link></li>*/}
          </ul>
          <div className="col-8"></div>
          <div className="dropdown col-4">
  <button className="dropbtn">Fler kategorier</button>
  <div className="dropdown-content">
    <li><Link to="/GoodPrice">Prisvärt</Link></li>
    <li><Link to="/Budget">Budget</Link></li>
    <li><Link to="/Best">Bäst i test</Link></li>
  </div>
</div>

          {this.props.children}
        </div>
    );
  }
}

export default App;
