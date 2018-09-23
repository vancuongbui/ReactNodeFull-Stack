import React, { Component } from 'react'
import logo from '../../static/images/logo/logo.svg';

export default class Header extends Component {
  render() {
    return (
        <header className="d-flex flex-row App-header">
          <div className="d-flex flex-md-col col-md-10">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="d-flex align-content-center App-title">Welcome to Vndemy</h1>
          </div>
          <div className="d-flex flex-row col-md-2" >
            <div className="col-xs-6 p-2">
              <button className="btn btn-secondary">
                <a href="/auth/google" style={{ color: '#fff', }}>Login</a>
              </button>
            </div>
            
            <div className="col-xs-6 p-2">
              <button className="btn btn-secondary">
                <a href="/auth/google" style={{ color: '#fff', }}>Sgin up</a>
              </button>
            </div>
          </div>
          
        </header>
    )
  }
}
