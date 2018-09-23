import React, { Component } from 'react'
import Header from '../menu/Header';
import Aside from '../menu/Aside';
import RightMenu from '../menu/RightMenu';


export default class Base extends Component {
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
                {this.props.mainComponent}   
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
