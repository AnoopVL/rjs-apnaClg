import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const product = [
    {
      price: 6969,
      name: "macBook",
      quantity: 0,
    },
    {
      price: 69696,
      name: "macBook air2",
      quantity: 0,
    },
    {
      price: 69699,
      name: "macBook air1",
      quantity: 0,
    },
  ];
  return (
    <>
      {/* to pass a variable in a component we have to use props, props are read only type */}
      <Navbar />
      <ProductList product={product} />
      <Footer />
    </>
  );
}

export default App;
