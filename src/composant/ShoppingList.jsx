import { useState } from "react";


const initialProducts = [
    { id: 0, name: "Fromage", count: 0},
    { id: 1, name: "Spaghetti", count: 0 },
    { id: 3, name: "Gâteau", count: 0 },
];


export default function ShoppingList() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrementClick(product) {
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
      );
  }

  return (
    <div className="mot-container">
      <h1> Liste de courses </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantité : {product.count}
            <button onClick={ () => handleIncrementClick(product) }>+</button>
            <button
              onClick={() => {
                setProducts(
                  products.map((p) =>
                    p.id === product.id && p.count > 0
                      ? { ...p, count: p.count - 1 }
                      : p
                  )
                );
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
