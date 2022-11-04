import React from 'react'
import Fooditem from './Fooditem';
const food = () => {
    const { products, onAdd, setQuantity } = props;
    console.log("Products->", products);
  return (
    <div>
        {products.map((product) => (
        // quantity={product.quantity}
        <FoodItem key={product.id} product={product} onAdd={onAdd} setQuantity={setQuantity} ></FoodItem>
      ))}
    </div>
  )
}

export default food