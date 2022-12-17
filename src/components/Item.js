import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false)

  const itemClass   = isInCart ? "in-cart" : ""
  const buttonClass = isInCart ? "remove" : "add"
  const buttonText  = isInCart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    setInCart((isInCart) => !isInCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
