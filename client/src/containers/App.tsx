import React from "react";
import "../App.css";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../providers/cartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
