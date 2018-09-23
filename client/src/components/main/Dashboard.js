import React, { Component } from 'react'
import Base from './Base';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Base 
            mainComponent={body}
        />
        <h2>Dashboard</h2>
      </div>
    )
  }
}

const body = () => {
    return (
        <div>
            <h2 style={{ color: '#fff' }}>Dashboard Component</h2>
            <h2 style={{ color: '#fff' }}>Dashboard Component</h2>
        </div>
    )
};
