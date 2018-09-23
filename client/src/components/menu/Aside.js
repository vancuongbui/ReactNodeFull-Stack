import React, { Component } from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Aside extends Component {
  render() {
    return (
        <div 
            style={{ backgroundColor: '#444444'}} 
            className="col s2"            
        >
            <p style={itemStyle}>
                <a href="" style={textStyle}>Aside Item 1</a>
            </p>   
            <p style={itemStyle}>
                <a href="" style={textStyle}>Aside Item 2</a>
            </p>   
            <p style={itemStyle}>
                <a href="" style={textStyle}>Aside Item 3</a>
            </p>   
            
        </div>
    )
  }
}

const textStyle ={
    color: '#fff',
};

const itemStyle = {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
}