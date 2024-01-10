import React from 'react';
import cart from '../media/cart.png';

function Cart() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src={cart} alt="Shopping Cart" />
      <p style={{ fontSize: '1.5rem' }}><b>Your cart is empty</b></p>
      <p>You can go to the home page to view more restaurants</p>
    </div>
  );
}

export default Cart;
