import React, { Component } from 'react';
import Nav from './Nav';
import Shop from './Shop';

class Main extends Component {

  state = {
    items: [],
    total: ""
  }


  _addItem = (item) => {
    var items = this.state.items;
    items.push(item);
    this.setState({items: items});
    var totals = items.map(item => item.price);
    var total = 0;

    for (var i = 0; i < totals.length; i++) {
      var string = JSON.stringify(totals[i]);
      var dec = string.slice(string.length - 2);
      var num = string.slice(0, string.length -2);
      var decimal = num + "." + dec;
      total = total + parseFloat(decimal);
      this.setState({total: total})
    }

  }


  render() {

    return (

      <div>
        <Nav items={this.state.items} total={this.state.total}/>
        <Shop items={this.state.items} _addItem={this._addItem} />
      </div>
    )

  }

}

export default Main;
