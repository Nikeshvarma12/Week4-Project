import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   constructor(props) {
     super(props);
    
     this.state = {

       message: ''
     };
   }

  
   render() {
     return (
       <div>
        
         <table>
           <thead>
           </thead>
           <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
           </tbody>
         </table>
        
       </div>
     );
}

   }
    


 
export default App;