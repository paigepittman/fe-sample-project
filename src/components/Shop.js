import React, { Component } from 'react';
import { Link } from "react-router-dom";
import products from '../product-payload.json';


class Shop extends Component {

  state = {products: products.products}

  render() {
    return(
    <div class="container">
      <div class="row products-view">
        {this.state.products.map((product,i) =>
            <div class="col s12 m3">
              <div class="card">
                <div class="card-image">
                  <img src={"./images/" + product.filename} />
                  <span class="card-title"></span>
                </div>
                <div class="card-content">
                  <p id="name">{product.name}</p>

                <p id="price">  ${product.price} </p>

                  <a class="add-button" href="#">Add to cart</a>
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
