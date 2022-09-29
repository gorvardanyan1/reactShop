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
        // console.log(this.state);
        this.props.handleChange(this.state)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleInput('title', e.target.value)} placeholder="Name" />
                <input type="text" onChange={e => this.handleInput('img', e.target.value)} placeholder="Image URl" />
                <input type="text" onChange={e => this.handleInput('price', e.target.value)} placeholder="Price" />
            </div>
            // <input type="text" onChange={(e) => this.props.handleChange(e.target.value)} />

        )
    }
}
