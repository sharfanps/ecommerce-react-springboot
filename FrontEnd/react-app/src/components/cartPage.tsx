import React from "react";
import "./cart.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  cartItems: Product[];
};

const CartPage: React.FC<Props> = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-container">
  <h2>Shopping Cart</h2>

  {cartItems.length === 0 ? (
    <p className="empty-cart">Your cart is empty</p>
  ) : (
    <>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>

      <h3 className="cart-total">Total: ${total}</h3>
    </>
  )}
</div>
  );
};

export default CartPage;