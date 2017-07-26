import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: data.categories
    };
  }
  render() {
    return (
      <div>
        <p>Home</p>
        <ul>
        {this.state.categories.map(category => <li><Link to={"/category/" + category.id}>{category.name}</Link></li>)}
        </ul>
      </div>
    );
  }
}

export default Home;
