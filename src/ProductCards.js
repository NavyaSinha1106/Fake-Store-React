function ProductCards(props) {
  const Products = props.product;
  const ProductItem = Products.map((item) => (
    <div className="Product">
      <div className="Image">
        <img src={item.image}></img>
      </div>
      <div className="Information">
        <div className="Title">
          <h3>{item.title}</h3>
        </div>
        <div className="Price">
          <p>
            {`$`}
            {item.price}
          </p>
        </div>
        <button
          onClick={() => {
            props.add(item.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="ProductCard">{ProductItem}</div>
    </>
  );
}

export default ProductCards;
