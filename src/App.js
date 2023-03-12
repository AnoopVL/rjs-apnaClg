import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Product from "./components/Product";
//import React, { useState } from "react";

function App() {
  const productList = [
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
  let [productList, setProductList] = useState(Product);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0
      ? newProductList[index].quantity--
      : newProductList[index].quantity;
    setProductList(newProductList);
  };
  return (
    <>
      {/* to pass a variable in a component we have to use props, props are read only type */}
      <Navbar />
      {/* <ProductList ProductList={ProductList} /> */}
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer /> */}
      <Product />
    </>
  );
}

export default App;
