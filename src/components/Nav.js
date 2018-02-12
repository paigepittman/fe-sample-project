import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Modal} from 'react-materialize';
import Cart from './Cart';


class Nav extends Component {

  state = {
    view: "/Shop",
    cart: 0
  }


  currentView = () => {


    if (this.state.view === "/Shop" || this.state.view === "/") {
      return (
        <div className="navbar">
          <span className="logo">
            <i class="fas fa-shopping-cart"></i>&nbsp;Cart.ly</span>
          <a href="#"><span id="shop-link" style={{
            "text-decoration": "underline"
          }}>
            Shop
          </span></a>
          <Cart items={this.props.items}/>
        </div>

      )
    } else if (this.state.view === "/Cart") {
      return (
        <div className="navbar">
          <span className="logo">
            <i className="fas fa-shopping-cart"></i>&nbsp;Cart.ly</span>
          <a href="#"><span id="shop-link">
            Shop
          </span></a>
          <Cart items={this.props.items}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.currentView()}
      </div>
    )
  }
}

export default Nav;
