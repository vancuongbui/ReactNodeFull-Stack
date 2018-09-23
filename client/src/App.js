import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/main/Landing';
import Dashboard from './components/main/Dashboard';
import SurveyNew from './components/main/SurveyNew';
import { fetchUserAction } from './store/actions';

class App extends Component {
  componentDidMount() {
    // anything need to preload need to be placed here
    this.props.onFetchUser(); 
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>

       
      </div>
    );
  }
}
// create mapToProps function

// create DispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: () => dispatch(fetchUserAction()),
  }
}

export default connect(null, mapDispatchToProps)(App);
