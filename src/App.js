import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import Checkout from './views/checkout';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import PRODUCTS from './static/data/product.js';




class App extends Component {

  constructor() {
    super();

    this.state = {
      products: [],
      cart: []
    };
  }

  componentWillMount() {
    this.setState({
      products: PRODUCTS
    });
  }

  // add product to cart using id, function written here because state is stored within this component
  addItem = id => {
    console.log(id);
  }



  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home addItem={this.addItem} products={this.state.products} />} />
        <Route exact path='/checkout' render={() => <Checkout />} />
      </Switch>
      </div>
    );
  }
}

export default App;
