import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Category from './components/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/category/:id" component={Category} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
