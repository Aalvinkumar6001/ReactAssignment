import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import Header from './Header';
import Registration from './Registration';
import Fetchdata from './Fetchdata';

ReactDOM.render(
    <Router>
        <div>
          <Header/>
          <Route exact path='/' component={App} />
          <Route  path='/Registration' component={Registration} />
          <Route  path='/Fetchdata' component={Fetchdata} />

          <Footer/>
        </div>
    </Router>,
    document.getElementById('root')
  );