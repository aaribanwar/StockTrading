import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // you can rename later

const TradeActionWindow = ({ uid, mode }) => {
  // mode is either "BUY" or "SELL"
  const { closeTradeWindow, handleOrdersChanged } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    const payload = {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode, // BUY or SELL
    };

    try {
      await axios.post("http://localhost:3002/newOrder", payload);
      handleOrdersChanged();
      closeTradeWindow();
    } catch (err) {
      console.error("Order failed:", err);
      setError("Failed to place order. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" id="trade-window" draggable="true">
      <h3>{mode} {uid}</h3>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className={mode === "BUY" ? "btn btn-blue" : "btn btn-red"}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? `${mode}ing...` : mode}
          </button>

          <button
            className="btn btn-grey"
            onClick={closeTradeWindow}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;
