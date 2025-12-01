// GeneralContext.js
import React, { useState, useCallback } from "react";
import TradeActionWindow from "./TradeActionWindow"; // unified popup component

const GeneralContext = React.createContext({
  openTradeWindow: (uid, mode) => {},
  closeTradeWindow: () => {},
  trade: null, // { uid, mode } or null
  handleOrdersChanged: () => {},
  ordersChanged: false,
});

export const GeneralContextProvider = (props) => {
  const [trade, setTrade] = useState(null); // null or { uid, mode }
  const [ordersChanged, setOrdersChanged] = useState(false);

  const openTradeWindow = useCallback((uid, mode = "BUY") => {
    setTrade({ uid, mode });
  }, []);

  const closeTradeWindow = useCallback(() => {
    setTrade(null);
  }, []);

  const handleOrdersChanged = useCallback(() => {
    setOrdersChanged((prev) => !prev);
  }, []);

  const contextValue = {
    openTradeWindow,
    closeTradeWindow,
    trade,
    handleOrdersChanged,
    ordersChanged,
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {props.children}

      {/* render unified TradeActionWindow when trade is set */}
      {trade && <TradeActionWindow uid={trade.uid} mode={trade.mode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
