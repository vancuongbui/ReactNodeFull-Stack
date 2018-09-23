import React, { Component } from 'react'

import Aside from '../menu/Aside';
import Header from '../menu/Header';
import RightMenu from '../menu/RightMenu';

export default class Landing extends Component {
  render() {
    return (
      <div>
         <Header />
        <div className="d-flex flex-xl-row">
          <div className="col-md-2 p-4">
            <RightMenu />
          </div>
          <div className="col-md-8 p-4 flex-grow-1">            
            <div style={{ backgroundColor: '#444444', paddingBottom: 20, }}>
              <h1 style={{ color: '#fff' }}>This is the home page</h1>  
              <h2 style={{ color: '#fff' }}>Help</h2>       
            </div>
          </div>
          <div className="col-md-2 p-4">
            <Aside />
          </div>       
        </div>
      </div>
    )
  }
}
