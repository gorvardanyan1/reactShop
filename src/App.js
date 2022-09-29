import React, { Component } from 'react'
import './App.css';
import MyInput from './components/MyInput';

import MyButton from './components/MyButton';
import MainComponent from './components/MainComponent';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id: 1,
          title: 'Iphone 14',
          price: "1700",
          imgLink: 'https://www.mobilecentre.am/img/prodpic/b6dd33f9c3752e9a518127ba3cd7628f9162e9faWWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a.jpg'
        },
        {
          id: 2,
          title: 'Iphone 11',
          price: "1200",
          imgLink: 'https://www.mobilecentre.am/img/prodpic/114203.jpg'
        },
        {
          id: 3,
          title: 'Iphone 12',
          price: "1500",
          imgLink: 'https://www.mobilecentre.am/img/prodpic/b18ecfe92ad8784f28de1.png'
        },
        {
          id: 4,
          title: 'Iphone 7',
          price: "700",
          imgLink: "https://www.mobilecentre.am/img/prodpic/A-6665.jpg"
        }
      ],
      thatValue: ""
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let id = this.state.products.at(-1).id
    this.setState({
      products: [
        ...this.state.products,
        {
          id: id += 1,
          title: this.state.thatValue.title,
          imgLink: this.state.thatValue.imgLink,
          price: this.state.thatValue.price
        }
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <nav>
          <MyInput handleChange={(val) => this.setState({ thatValue: val })} />
          <MyButton handleClick={this.handleClick} />
        </nav>

        <MainComponent products={this.state.products} />
      </div>
    )
  }
}

export default App


