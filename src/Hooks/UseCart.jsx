import React from "react";
import AppContext from "../context";


 export const UseCart = () => {

  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => parseFloat(obj.price) + parseFloat(sum), 0);

  return { cartItems,setCartItems, totalPrice };
};


