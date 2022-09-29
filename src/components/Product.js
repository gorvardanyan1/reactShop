import React, { Component } from 'react'

export class Product extends Component {
    render() {
        const { id, title, imgLink, price } = this.props.productInfo
      
        return (
            <div className='productDiv'>
                <img src={imgLink} alt="ProductImg" />
                <h3>{id}</h3>
                <h1>{title}</h1>
                <h4>{price}$</h4>
            </div>
        )
    }
}

export default Product