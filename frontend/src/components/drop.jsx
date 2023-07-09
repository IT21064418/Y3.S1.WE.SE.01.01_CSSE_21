import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import Loading from "./Loading";
// import Pagination from "./Pagination";

function OrdersAdminPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.products);
  const [orderToShow, setOrderToShow] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all"); // Selected dropdown option

  const handleClose = () => setShow(false);

  function showOrder(productsObj) {
    let productsToShow = products.filter((product) => productsObj[product._id]);
    productsToShow = productsToShow.map((product) => {
      const productCopy = { ...product };
      productCopy.count = productsObj[product._id];
      delete productCopy.description;
      return productCopy;
    });
    console.log(productsToShow);
    setShow(true);
    setOrderToShow(productsToShow);
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8007/api/orders")
      .then(({ data }) => {
        setLoading(false);
        setOrders(data);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  if (orders.length === 0) {
    return <h1 className="text-center pt-4">No Tender Submissions Yet</h1>;
  }

  function TableRow({ _id, orderedItems, paymentId, amount, paymentMethod, buyerEmail, date, deliveryId, deliveryService, deliveryAddress, deliveryStatus}) {
    return (
      <tr>
        <td>{_id}</td>
        <td>{orderedItems}</td>
        <td>{paymentId}</td>
        <td>{amount}</td>
        <td>{paymentMethod}</td>
        <td>{buyerEmail}</td>
        <td>{date}</td>
        <td>{deliveryId}</td>
        <td>{deliveryService}</td>
        <td>{deliveryAddress}</td>
        <td>{deliveryStatus}</td>
        <td>
          <div className="dropdown-container">
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="accepted">Accepted</option>
            </select>
          </div>
        </td>
      </tr>
    );
  }

  // Filter orders based on selected status
  const filteredOrders = selectedStatus === "all" ? orders : orders.filter((order) => order.status === selectedStatus);

  return (
    <>
      <table className="table-responsive table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Name</th>
            <th>Order Value</th>
            <th>User Contact</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

      {show && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tender Details</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {orderToShow.map((order) => (
                  <div className="order-details__container d-flex justify-content-around py-2">
                    <img src={order.pictures[0].url} style={{ maxWidth: 100, height: 100, objectFit: "cover" }} alt="Product" />
                    <p>
                      <span>{order.name}</span>
                    </p>
                    <p>Charges Rs. {Number(order.price) * order.count}</p>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrdersAdminPage;
