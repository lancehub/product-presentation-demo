import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import data from '../data/json';

class Cateogry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: data.categories.filter(category => category.id == this.props.match.params.id)[0],
      products: data.products.filter(product => product.category == this.props.match.params.id),
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.category.name}</p>
        <div class="Cards">
          <SwipeableViews>
            {this.state.products.map(product => <div className="Card">{product.name}</div>)}
          </SwipeableViews>
        </div>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Cateogry;
