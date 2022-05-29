import Header from "./Header";
import React from "react";
import CartItem from "./CartItem";
import ProductCards from "./ProductCards";

export const HeaderContext = React.createContext({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.cartData = this.cartData.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleAddtoCartClick = this.handleAddtoCartClick.bind(this);
    this.handleDeletefromCartClick = this.handleDeletefromCartClick.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.state = {
      product: [],
      cart: [],
      isClicked: false,
      del: [],
    };
    this.productArray = [];
    this.cartArray = [];
    this.deleteArray = [];
  }

  handleNavClick = async (site) => {
    await this.fetchData(site);
    this.setState({ isClicked: false });
  };

  handleAddtoCartClick = async (site) => {
    await this.addToCart(site);
  };

  handleCartClick = async (site) => {
    await this.cartData(site);
    this.setState({
      isClicked: true,
    });
  };

  handleDeletefromCartClick = async (site) => {
    await this.deleteFromCart(site);
    this.setState({
      isClicked: true,
    });
  };

  async componentDidMount() {
    await this.fetchData();
  }


  fetchData = async (path = "") => {
    const response = await fetch(`https://fakestoreapi.com/products/${path}`);
    const data = await response.json();
    this.setState({
      product: data,
    });
  };

  addToCart = async (id) => {
    this.cartArray.push(id);
  };

  cartData = async () => {
    this.productArray = [];
    for (let i = 0; i < this.cartArray.length; i++) {
      const response = await fetch(
        `https://fakestoreapi.com/products/${this.cartArray[i]}`
      );
      const data = await response.json();
      this.productArray.push(data);
    }
    this.setState({
      cart: this.productArray,
    });
  };

  deleteFromCart = async (id,cost) => {
    this.cartArray = this.cartArray.filter((item) => item !== id);
    this.cartData();
  };

  render() {
    let button;
    if (this.state.isClicked) {
      button = (
        <>
          <CartItem
            cart={this.state.cart}
            remove={this.handleDeletefromCartClick}
          />
        </>
      );
    } else {
      button = (
        <ProductCards
          product={this.state.product}
          add={this.handleAddtoCartClick}
        />
      );
    }
    return (
      <>
        <HeaderContext.Provider value={this.handleNavClick}>
          <Header add={this.handleCartClick} />
        </HeaderContext.Provider>
        {button}
      </>
    );
  }
}

export default App;