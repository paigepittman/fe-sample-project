import React, { Component } from 'react';
import Nav from './Nav';
import Shop from './Shop';

class Main extends Component {

  state = {
    items: []
  }


  _addItem = (item) => {
    console.log(item);
  }


  render() {

    return (

      <div>
        <Nav items={this.state.items} />
        <Shop items={this.state.items} addItem={this._addItem} />
        {/* {React.cloneElement(this.props.children, {items: this.state.items, _addItem: this._addItem})} */}

      </div>
    )

  }

}

export default Main;
