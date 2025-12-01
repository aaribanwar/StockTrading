import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const {ordersChanged} = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, [ordersChanged]);

  return (
    <>
      {/* SHOW ONLY IF THERE ARE ORDERS */}
      {allOrders.length > 0 && (
        <div className="orders">
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price Per Unit</th>
                  <th>Total Price</th>
                  <th>Mode</th>
                </tr>
              </thead>

              <tbody>
                {allOrders.map((order, index) => {
                  const total = order.price * order.qty;

                  return (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price}</td>
                      <td>{total}</td>
                      <td>{order.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SHOW ONLY IF NO ORDERS */}
      {allOrders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      )}
    </>
  );
};

export default Orders;
