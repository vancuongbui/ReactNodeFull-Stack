import React, { Component } from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class LeftMenu extends Component {
  render() {
    return (
        <div className="col s2" style={{ backgroundColor: '#444444', }}>
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
