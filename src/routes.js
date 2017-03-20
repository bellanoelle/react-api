import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './App';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Clothes from './pages/Clothes/Clothes';
import Electronics from './pages/Electronics/Electronics';
import Tools from './pages/Tools/Tools';
import Best from './pages/Best/Best';
import Budget from './pages/Budget/Budget';
import GoodPrice from './pages/GoodPrice/GoodPrice';
import NotFound from './pages/NotFound/NotFound';


const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
   <IndexRoute component={Home} />
       <Route path="/contact" component={Contact} />
       <Route path="/Clothes" component={Clothes} />
       <Route path="/Electronics" component={Electronics} />
       <Route path="/Tools" component={Tools} />
       <Route path="/Best" component={Best} />
       <Route path="/GoodPrice" component={GoodPrice} />
       <Route path="/Budget" component={Budget} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;