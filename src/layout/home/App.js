
import './App.css';
import Header from '../../components/Header';
import Category from '../../components/Category';
import Product from '../Product';
import Cart from '../Cart';
import Search from '../Search';

import Footer from '../../components/Footer';
import APPCONFIG from '../../config/appconfig';
import React, { useState } from "react";
import ITEMS from '../../config/items';

function App() {
  const [cartItems, setCardItem] = useState([]);
  const [products, setProducts] = useState(ITEMS);
  
  function addItemToCart(item, qty) {
    item.qty = qty;
    return setCardItem([...cartItems, item]);
  }
  function achangeCategory(type) {
    return setCardItem([...cartItems, type]);
  }
  function filterProduct(event){
    console.log(event.target.value);
    console.log(products)
    var filterItms=products.filter(e=>e.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(filterItms);
    console.log(ITEMS);
    //setProducts(filterItms);
    return setProducts([...filterItms]);
  }

  return (
    <div className="App">
      <div className="header">
        <Header data={APPCONFIG.header}></Header>
      </div>
      <div className='leftNav' >
        <Category data={APPCONFIG.leftNavs} onNav={achangeCategory}></Category>
      </div>
      <div className='content'>
        <Search onSearch={filterProduct} products={products}></Search>
        <Product onAdd={addItemToCart} products={products}></Product>
      </div>
      {<div >
        <Cart data={cartItems}></Cart>
      </div>}
      <div className='footer'>
        <Footer data={APPCONFIG.footer}></Footer>
      </div>
    </div>
  );
}

export default App;
