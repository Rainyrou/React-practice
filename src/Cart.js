import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const productsData = [
  { id: 1, name: "Product 1", price: 29.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 39.99 },
];

const CartApp = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex">
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="w-1/2 pr-4">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const Product = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600">Price: ${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/2 pl-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
          <h3 className="text-lg font-bold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
};

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <h4 className="text-md font-medium">{item.name}</h4>
      <p className="text-gray-600">Price: ${item.price}</p>
      <p className="text-gray-600">Quantity: {item.quantity}</p>
      <button
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartApp;
