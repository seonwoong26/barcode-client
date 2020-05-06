import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Stock/Home';
import Stock from './components/Stock/Stock';
import Stock_in from './components/Stock/Stock_in';
import Stock_out from './components/Stock/Stock_out';
import Client from './components/Stock/Client';
import Button from '@material-ui/core/Button';

import './App.css';


function App() {
  return (
    <Router>
        <div>
          <nav>
          <div className="Button-header">
            <span className="link">
              <Link to="/home"><Button variant="contained" color="primary">Home</Button></Link>
            </span>
            
            <span className="link">
              <Link to="/stock"><Button variant="contained" color="primary">재고현황</Button></Link>
            </span>

            <span className="link">
              <Link to="/stock_in"><Button variant="contained" color="primary">입고현황</Button></Link>
            </span>

            <span className="link">
              <Link to="/stock_out"><Button variant="contained" color="primary">출고현황</Button></Link>
            </span>

            <span className="link">
              <Link to="/client"><Button variant="contained" color="primary">거래처목록</Button></Link>
            </span>
            </div>
              {/* <li>
                <Link to="/user">User</Link>
              </li> */}
              
          </nav>

          <Route exact path='/home' component={Home}/>
          <Route path='/stock' component={Stock}/>
          <Route path='/stock_in' component={Stock_in}/>
          <Route path='/stock_out' component={Stock_out}/>
          <Route path='/client' component={Client}/>
       </div>
      </Router>
  );
}

export default App;
