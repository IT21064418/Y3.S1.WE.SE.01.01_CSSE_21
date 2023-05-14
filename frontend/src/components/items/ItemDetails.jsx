import "./ItemDetails.css";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  // Get the items array from local storage or create a new one
  const items = JSON.parse(localStorage.getItem('items')) || [];

  return (
    <div>
      {items.map((item, index) => (
        <div class="product_style" key={index}>
          <b><h1>Product Name:{item.product_name}</h1></b>
          <br />
          <p>Product Description:{item.product_description}</p>
          <br />
          <p>Product Features:{item.product_features}</p>
          <br />
          <p>Product Price{item.product_price}</p>
          <br />
          <p>Shipping Details:{item.shipping_information}</p>
          <br />
          <p>Return Policy:{item.return_policy}</p>
          <br />
          <p>Warranty Information:{item.Warranty_Information}</p>
          <Link to={{ pathname: "../addreview", state: { productId: item.product_id } }}>
            <button>Add Review</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
