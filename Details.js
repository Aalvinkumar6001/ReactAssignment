import React, { Component } from 'react';
import './App.css';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Aalvin Vijaykumar",
           company: "COGNIZANT TECHNOLOGY SOLUTIONS",
        }
     }
     
  render() {
    return (
      <div >
        <header className="App-div2">
          <h1 className="App-title">{this.state.name}</h1>
          <h1 className="App-title">{this.state.company}</h1>

        </header>
      </div>
    );
  }
}
export default Details;