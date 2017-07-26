import React, { Component } from 'react';

class Cateogry extends Component {
  render() {
    return (
      <div>Cateogry {this.props.match.params.id}</div>
    );
  }
}

export default Cateogry;
