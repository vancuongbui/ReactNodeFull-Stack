import React, { Component } from 'react'
import Base from './Base';

export default class SurveyNew extends Component {
    body = () => {
        return (
            <div>
                <h2 style={{ color: '#fff' }}>Survey new page</h2>
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
