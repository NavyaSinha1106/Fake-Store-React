function CartItem(props) { 
    const Carts = props.cart;
      const CartItem = Carts.map((items) => (
        <div className="Product">
          <img src={items.image}></img>
          <div className="Information">
            <div className="Title">
              <h3>{items.title}</h3>
            </div>
            <div className="Price">
              <p>
                {`$`}
                {items.price}
              </p>
            </div>
            <button
              onClick={() => {
                props.remove(items.id, items.price);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ));
      let total = 0
    Carts.forEach(function (CartItem) {
      total += CartItem.price;
  });
  
    let sum = 0;
    if (total === 0) {
      sum = 0;
    
    } else if (total < 100) {
      sum = 99;
    } else {
      sum = 0;
    }
    let order;
    order = total + sum;
    return (
      <>
        <div className="CartItems">{CartItem}</div>
        <div className="CartTotal">
          <h3 className="Summary">Order Summary</h3>
          <p className="SubTotal">
            Items:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {`$`}
            {total}
          </p>
          <p className="Delivery">
            Delivery:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;
            {`$`}
            {sum}{" "}
          </p>
          <p className="Total">
            Order
            Total:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {`$`}
            {order}
          </p>
        </div>
      </>
    );
  }


export default CartItem;
