import React, { Component } from 'react';
import data from '../data/json';

class Cateogry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: data.categories.filter(category => category.id == this.props.match.params.id)[0],
      products: data.products.filter(product => product.id == this.props.match.params.id),
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.category.name}</p>
      </div>
    );
  }
}

export default Cateogry;
