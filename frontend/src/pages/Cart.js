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
      <button
        style={{
          marginTop:'10px',
          backgroundColor: 'orange',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '1px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        SEE RESTAURANTS NEAR YOU
      </button>
    </div>
  );
}

export default Cart;
