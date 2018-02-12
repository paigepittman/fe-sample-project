import React, {Component} from 'react';
import {Modal} from 'react-materialize';
import Cart from './Cart';

class Nav extends Component {

  state = {
    view: "shop",
    cart: 0
  }

  changeView = (newState) => {
    this.setState({view: newState});
  }

  //returns differnt Nav styling based on current page view
  currentView = () => {
    if (this.state.view === "shop") {
      return (
        <div className="navbar">
          <span className="logo">
            <i class="fas fa-shopping-cart"></i>&nbsp;Cart.ly</span>
          <a href="#" >
            <span id="shop-link" style={{
              "text-decoration": "underline"
            }}>
              Shop
            </span>
          </a>
          <Cart items={this.props.items} total={this.props.total} changeView={this.changeView}/>
        </div>

      )
    } else if (this.state.view === "cart") {
      return (
        <div className="navbar">
          <span className="logo">
            <i className="fas fa-shopping-cart"></i>&nbsp;Cart.ly</span>
          <a href="#">
            <span id="shop-link">
              Shop
            </span>
          </a>
          <Cart items={this.props.items} total={this.props.total} changeView={this.changeView}/>
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
