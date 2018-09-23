import React, { Component } from 'react'
import Header from '../menu/Header';
import Aside from '../menu/Aside';
import LeftMenu from '../menu/LeftMenu';
import Footer from '../menu/Footer';


export default class Base extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#444444', margin: 0, }}>
        <Header />
        <div className="row" style={{ marginTop: 0, marginBottom: 0, }}>
          <LeftMenu />
          <div className="col s8" style={{ backgroundColor: '#333333' }}>  
            {this.props.mainComponent}   
          </div>
          <Aside />     
        </div>
        <Footer />
      </div>
    )
  }
}
