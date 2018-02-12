import React, { Component } from 'react';
import { Link } from "react-router-dom";
import products from '../product-payload.json';


class Shop extends Component {

  state = {products: products.products}


  componentWillReceiveProps(props) {
    console.log(props)
  }

  _addItem = (item) => {
    console.log(this.props)

  }


  render() {
    console.log(this.props)
    return(
    <div className="container">
      <div className="row header">
        <div className="col s12 m12" style={{"font-size": "24px", "color": "#494949"}}>
          Shop our featured collection
        </div>
      </div>
      <div className="row products-view">
        {this.state.products.map((product,i) =>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image">
                  <img src={"./images/" + product.filename} />
                  <span className="card-title"></span>
                </div>
                <div className="card-content">
                  <p id="name">{product.name}</p>

                  <p id="price">  ${product.price} </p>

                  <a className="add-button" onClick={() => this._addItem(product)}>Add to cart</a>
                </div>
              </div>
            </div>

                )}
          </div>
        </div>
    )
  }
}

export default Shop;
