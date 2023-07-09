import { useEffect, useState } from "react";
import "./ItemDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/itemmanagement")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div>
      {Items.map((item, index) => (
        <div className="product_style" key={index}>
          <b>
            <h1>Product Name: {item.product_name}</h1>
          </b>
          <br />
          <p>Product Description: {item.product_description}</p>
          <br />
          <p>Product Features: {item.product_features}</p>
          <br />
          <p>Product Price: {item.product_price}</p>
          <br />
          <p>Shipping Details: {item.shipping_information}</p>
          <br />
          <p>Return Policy: {item.return_policy}</p>
          <br />
          <p>
            Ratings:
            {item.reviews &&
              item.reviews.map((review, index) => (
                <span key={index}>
                  <br/>{review.review_title}<br/>{review.rating}<br/>{review.Description}<br/>
                </span>
              ))}
          </p>
          <br />
          <p>Warranty Information: {item.Warranty_Information}</p>
          <Link to={`../addreview/${item._id}`}>
            <button>Add Review</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
