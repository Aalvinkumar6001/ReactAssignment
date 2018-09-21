import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Col } from 'reactstrap';
import Imagephoto from './Imagephoto';
import Details from './Details';

class App extends Component {
  render() {
    return (
<div class="Body">  
{/* <div class="row">
    <div class="col-lg-6" style="background-color:yellow;">
   column1
  </div>
  <div class="col-lg-6" style="background-color:pink;">column2
  </div>
  </div> */}
  <Row>
          <Col sm={{ size: 'auto', offset: 1 }}><Imagephoto/></Col>
          <Col sm={{ size: 'auto', offset: 1 }}><Details/></Col>
        </Row>
  </div>
    );
  }
}

export default App;
