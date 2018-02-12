import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Modal} from 'react-materialize';

class Cart extends Component {

  //finding decimal point in price
  _addDec = (price) => {
    var string = JSON.stringify(price);
    var dec = string.slice(string.length - 2);
    var num = string.slice(0, string.length - 2);
    var decimal = num + "." + dec;
    return decimal;
  }

  render() {

    return (
      <Modal trigger={< a href = "#" > <span id="cart-link" onClick={() => this.props.changeView("cart")}>
        Your Cart&nbsp;
        <span id="items">{this.props.items.length}</span>
      </span> < /a>}>
        <div className="cart-div">
          Your Cart
          <table>
            {this.props.items.map(item => <tr id="items-row">
              <td className="thumb-img"><img src={"./images/" + item.filename}/></td>
              <td className="item-info">{item.name}<br/>
                <span id="price-td">${this._addDec(item.price)}</span>
              </td>
            </tr>)}
            <tr id="total-row">
              <td>
                Total</td>
              <td className="your-total">{this.props.total}</td>
            </tr>

          </table>
        </div>
      </Modal>
    )
  }
}

export default Cart;
