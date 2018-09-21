import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
class Header extends Component {
    render() {
      return (
        <div className="Header">
        <Container>
    <Row>
   
          <Col> <h4><Link to="/"><span class="glyphicon glyphicon-th" aria-hidden="true"></span> HOME</Link></h4></Col>
          <Col><h4><Link to="/Registration"><span class="glyphicon glyphicon-th" aria-hidden="true"></span> REGISTRATION</Link></h4></Col>
          <Col><h4><Link to="/Fetchdata"><span class="glyphicon glyphicon-th" aria-hidden="true"></span> FETCHDATA</Link></h4></Col>
          <Col>CONTACTLIST</Col>
        </Row>
</Container>
</div>

      );
    }
  }
  
  export default Header;