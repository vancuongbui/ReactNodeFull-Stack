import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class RightMenu extends Component {
  render() {
    return (
        <div style={{ backgroundColor: '#222222', paddingBottom: 20, }}>
            <p style={itemStyle}>
                <a href="" style={textStyle}>Menu Item 1</a>
            </p>   
            <p style={itemStyle}>
                <a href="" style={textStyle}>Menu Item 2</a>
            </p>   
            <p style={itemStyle}>
                <a href="" style={textStyle}>Menu Item 3</a>
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
};
