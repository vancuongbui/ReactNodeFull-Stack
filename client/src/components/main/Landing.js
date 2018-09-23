import React, { Component } from 'react'

import Base from './Base';

export default class Landing extends Component {
    body = () => {
        return (
            <div>
                <h2 style={{ color: '#fff' }}>Home Page</h2>
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
