import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <p> {props.task} </p>
            </div>
        )
    }
}
