import React, { Component, styleSheet } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/main/Landing';
import Dashboard from './components/main/Dashboard';
import Base from './components/main/Base';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>

       
      </div>
    );
  }
}


export default App;
