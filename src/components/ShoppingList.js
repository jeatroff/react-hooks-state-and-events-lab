import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  const filteredItems = items.filter(checkCategory)

  function checkCategory(item) {
    return selectedCategory === "All" || item.category === selectedCategory
  }

  function handleChange() {
    setCategory((selectedCategory) => document.getElementById("filter").value )
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select id="filter" name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
