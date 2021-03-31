import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
 
        <ol>
          <li>Player 1</li>
          <input type="text" placeholder="Enter Name"></input>
          <li>Player 2</li>
          <input type="text" placeholder="Enter Name"></input>
          
        </ol>
      </div>
    );
  }
}
 
export default Stuff;