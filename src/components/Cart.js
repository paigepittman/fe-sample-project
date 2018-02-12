import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Modal } from 'react-materialize';

class Cart extends Component {
  render() {

    return(
      <Modal
        header='Modal Header' trigger={<a href="#"><span id="cart-link">
            Your Cart&nbsp;
            <span id="items">{this.props.items.length}</span>
          </span></a>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
      </Modal>
    )
  }
}

export default Cart;
