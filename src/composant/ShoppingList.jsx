import { useState } from "react";

const initialProducts = [
  { id: 0, name: "Fromage", count: 0 },
  { id: 1, name: "Spaghetti", count: 0 },
  { id: 3, name: "Gâteau", count: 0 },
];

export default function ShoppingListCounter() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrementClick(product) {
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, count: p.count + 1 } : p
      )
    );
  }

  function handleDecrementClick(product) {
    setProducts(
      products.map((p) =>
        p.id === product.id && p.count > 0 ? { ...p, count: p.count - 1 } : p
      )
    );
  }

  const btnBase =
    "w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm text-lg font-bold text-white";
  const btnIncrement = `${btnBase} bg-green-500 hover:bg-green-600`;
  const btnDecrement = `${btnBase} bg-red-500 hover:bg-red-600`;

  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Liste de courses
      </h1>

      <ul className="list-none p-0 max-w-md mx-auto text-left">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-3 mb-2 bg-gray-50 border border-gray-100 rounded-md"
          >
            <span className="text-gray-700">
              {product.name} - Quantité :
              <span className="font-bold ml-1">{product.count}</span>
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => handleIncrementClick(product)}
                className={btnIncrement}
              >
                +
              </button>
              <button
                onClick={() => handleDecrementClick(product)}
                className={btnDecrement}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
