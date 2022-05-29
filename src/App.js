import Header from "./Header";
import React from "react";
import CartItem from "./CartItem";
import ProductCards from "./ProductCards";
import { useState,useEffect } from "react";

export const HeaderContext = React.createContext({});

let productArray = [];
let cartArray = [];

function App(props) {

  let [product, setProduct] = useState([]);
  let [cart, setCart] = useState([]);
  let [isClicked, setClicked] = useState(false);

  const handleNavClick = async (site) => {
    await fetchData(site);
    setClicked(isClicked = false)
  };

  const handleAddtoCartClick = async (site) => {
    await addToCart(site);
  };

  const handleCartClick = async (site) => {
    await cartData(site);
    setClicked(isClicked = true)
  };

  const handleDeletefromCartClick = async (site) => {
    await deleteFromCart(site);
    setClicked(isClicked = true)
  };

   useEffect(() => {
    fetchData()},[]
    );

  const fetchData = async (path = "") => {
    const response = await fetch(`https://fakestoreapi.com/products/${path}`);
    const data = await response.json();
    setProduct(product = data)
  };

  const addToCart = async (id) => {
    productArray.push(id);
  };
  
  const cartData = async () => {
    cartArray = []
    for (let i = 0; i < productArray.length; i++) {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productArray[i]}`
      );
      const data = await response.json();
      cartArray.push(data);
    }
    setCart(cart = cartArray)
  };

  const deleteFromCart = async (id) => {
    productArray = productArray.filter((item) => item !== id);
    cartData();
  };

    let button;
    if (isClicked) {
      button = (
        <>
          <CartItem
            cart={cart}
            remove={handleDeletefromCartClick}
          />
        </>
      );
    } else {
      button = (
        <ProductCards
          product={product}
          add={handleAddtoCartClick}
        />
      );
    }
    return (
      <>
        <HeaderContext.Provider value={handleNavClick}>
          <Header add={handleCartClick} count={productArray.length} />
        </HeaderContext.Provider>
        {button}
      </>
    );
  }

export default App;
