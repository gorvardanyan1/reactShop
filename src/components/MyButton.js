import React, { Component } from 'react'

export class MyButton extends Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>Add</button>
        )
    }
}
export default MyButton