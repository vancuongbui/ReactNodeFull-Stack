import React, { Component } from 'react'
import Base from './Base';

export default class Dashboard extends Component {
    body = () => {
        return (
            <div>
                <h2 style={{ color: '#fff' }}>Dashboard Component</h2>
                <h2 style={{ color: '#fff' }}>Dashboard Component</h2>
            </div>
        )
    };
    render() {
        return (
        <div>
            <Base 
                mainComponent={this.body()}
            />
        </div>
        )
    }
}


