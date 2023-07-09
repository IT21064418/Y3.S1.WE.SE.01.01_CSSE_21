import React from "react";
import OrdersAdminPage from "../components/drop";

function AdminDashboard() {
  return (
    <div>
      <br />
      <h1>Order Management</h1>
      <br />
      <div className="tab-container">
        <div className="tab-content">
          <div className="tab-pane active" id="orders">
            <OrdersAdminPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
