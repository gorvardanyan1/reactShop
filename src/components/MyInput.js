import React, { Component } from 'react'

export default class MyInput extends Component {
    constructor() {
        super()
        this.handleInput.bind(this)
    }
    state = {
        title: "",
        imgLink: "",
        price: "",
    }
    handleInput(key, value) {
        this.setState({ [key]: value })
        this.props.handleChange(this.state)
    }
    render() {
        return (
            <div>
                <input type="text"   onChange={e => this.handleInput('title', e.target.value)} placeholder="Name" />
                <input type="text" onChange={e => this.handleInput('imgLink', e.target.value)} placeholder="Image URl" />
                <input type="text" onChange={e => this.handleInput('price', e.target.value)} placeholder="Price" />
            </div>
        )
    }
}
