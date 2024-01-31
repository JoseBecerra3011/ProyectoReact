import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Puedes instalar react-icons para obtener el ícono

const CartWidget = () => {
  const cartItemCount = 2; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;