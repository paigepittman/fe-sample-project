import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Modal } from 'react-materialize';

class Cart extends Component {
  render() {

    return(
      <Modal
         trigger={<a href="#"><span id="cart-link">
            Your Cart&nbsp;
            <span id="items">{this.props.items.length}</span>
          </span></a>}>
          <div className="cart-div">
            Your Cart
            <table>
        {this.props.items.map(item =>
            <tr id="items-row">
            <td className="thumb-img"><img src={"./images/" + item.filename}/></td>
            <td className="item-info">{item.name}<br />
            <span id="price-td">{item.price}</span></td>
          </tr>
          )}
          <tr id="total-row">
          <td> Total</td>
          <td className="your-total">{this.props.total}</td>
        </tr>

        </table>
        </div>
      </Modal>
    )
  }
}

export default Cart;
