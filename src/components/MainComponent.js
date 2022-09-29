import React, { Component } from 'react'
import Product from './Product'

export class MainComponent extends Component {
    render() {
        let { products } = this.props

        return (
            <main>
                {products.map(elem => <Product key={elem.id} productInfo={elem} />)}
            </main>
        )
    }
}

export default MainComponent
