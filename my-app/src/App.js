import React from 'react';
// eslint-disable-next-line
import logo from './draft.png';
import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter} from 'react-router-dom';
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    
     firstname:'',
     lastname:'',
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
    
    handleChange (event) {
      console.log(event,"the event object");
      this.setState({firstname:event.target.firstname});
      this.setState({lastname:event.target.lastname});
    }
    handleSubmit (event) {
      console.log("got here", event)
      event.preventDefault();
        alert('Signed Up:' + this.state.firstname + this.state.lastname);
      
    }
  
  
  render() {
      return (
          <div className="App">
            <header className="App-header">
              <h1>Drat</h1>
              <div>
              <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="form">
              <form onSubmit={this.handleSubmit}>
                  <input type='text' placeholder="firstname"className="input" value={this.state.firstname} 
                    onChange={this.handleChange}
                     required/><br></br>
                  <input type='text' placeholder="lastname" className="input" value={this.state.lastname} 
                    onChange={this.handleChange} required /><br></br>
                    <input type ="submit" value="submit"
                     />
                                                            
              </form>
              </div>
            </header>
            </div>
        );
  }
}


export default App;