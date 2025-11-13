import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Fromage",
    count: 0,
    price: 5.5,
    image: "data:image/webp;base64,UklGRmQFAABXRUJQVlA4IFgFAABwKACdASreAHcAPuE6uFwoqaiolpEwHAlnBwZ5ZtYQslDdVR4l+Y+4O67yt3E4BErTt2M70P6aSo02uO78MIbMp747x9aFkwEdyO0l/egJqiQeCCAI+0YcdAGX9S1Iw3l7PNN+yvDVZldntrFxvv4jOODLfhXuqFYWT2ijVmQk4JfGRmnpBJDB6n0qHRzKTZNBk5llBnLfNuvFChI0RhmUxr+2yG1eahQHz4Y4u5/TSVVFsg26dXHbVjsE7M5cUGh1oxXn8RnfLpDU1MVqmmAEZqkw0xgG+TS5cNUxmal1UUvw6R0V1YGLPPrbyHXdhHM6t1l6teEtmW9TjKDWsE0gy7zE8WwGK9/YtLlk7jcBpQcxRgxax/8JBaVkTyMQCbafWpmVG+26g9DVOaeM4RYv8fSmAdS7tNhtkTLIU2OOHtGV5wo+q5POexKZwAD++Y9jFdpXA54inF4o4sNDs0wzBo4XXwLGl0BMsDw9gpuXuMyclsqQ0L+dtnSXcqpvX4v7N6G+Z32PemD8LDhTV3J9W+STOlUy/0qobDgHYQv3crTjRWIJ3XN6Fo8L7hZQfXP8CwmIIgSaEPCDzPIO5rPo2swOSrmoAfu1B6fjAxNedV61d7l/X0wjWBkVeM6fcxrc6HHYxThGGcOiDxIvUzWhxwIVWNHW8cNXvO/0/IyqMy/aLxqdx7Ss/uXsTJzYcp/clBVV0Bq/pFrcaT789sS+U8BJwBkjEIwGzeLFYx56SNj6gd7+8nnATibkuYkd4U+ELxi71u8kFqlqHq7eQ06C35Xjq0I0M3W44XUfsmDAbSci8Cyvohfq0m9PrJPBcYutDhPzUq5jTIGocCZS282is62+AzmFCRBmYWkOxWUnyrdR8lOKV2vesze2K64REGtnMjKOLmuZYqs6OM/CAuRnUie5QVyWROFFeg0YQL0szV9Gq2YQ+yMXEG05P0vicm8AcRbq8cmrR2BI4Fd7w8UjAfXheKWVAraivJ5pLpQOfiFR3yI1+X4plRr+seTDeADuIAdxlF5xqyY4eTS6/K/A477OCYmZgt4GcB0oGsdf7AmVen8Rn3RaAXvfsndOj5C6zMs0vYrf3GLS+Rd00ZzyadStcT5z8WZKbVzUd6pmKfVuiyZw2pTSJkwmO07SUovdqKg7MkKC5FqCH9uMh2Cur1A8UzaHAR4DBEc2ugZyObQ7e45yiVWkb9u/Rr3IL6f6CnZoEwiosZ2wsb3BAMWaDxCRASvQzE0rnbPtdwbreHM5YIsO1qOx8MaAFxzmtWDAjUs3ufjUXHRcHzisHbLAqFeoZA9Gxx1MGgnPP2dHparwOABxdeYe2NTmfF4+tfyQjoVKvqEUSnt7Td7q74Ll3hciN/rKenxnYOIPBw3pbBwMMBfEMbiuS5I4Iog0dOaoW84kKlaOK2Ynyw8bZ7QduJ3DojLKjaohLATSpnM2C/JIP4wNqw8ok2bWS8JIiCLWcpK0q8h/YxkQmofLZL5KDa23DB6QFzdaulfg2EuSvIpAmRnbe1ZTXQ1FjoqNAtGRIH9tk3segFjiVFBoVtANLBKiRF1hz2u0wGoXUaH4BQysCIa9HB9lhemWso5ce4ekEB4XGUgen3K0HjaHszQ3SvsGGeXQJy11b0RnQB+c6PZLKaNkB5sS+cQh3NGO15MjrfMBBprKTXd6q/KfwDg7oSSHWPmQKHOKv3+6hhEU/tg4VGYjuMn2uatbNfRiifiKQBSKMsbZ/0uUUAzLk8KcLZAZxB8X2Wow7XZOALE1bcmeqZk0hiDhGI04T1yfqHO90i0obXK61ytXDQ16D1kfHxiX3fRwAAA=",
  },
  {
    id: 1,
    name: "Spaghetti",
    count: 0,
    price: 2.3,
    image: "data:image/webp;base64,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",
  },
  {
    id: 3,
    name: "Gâteau",
    count: 0,
    price: 8.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReospoUjFDARmvpbYXx37rmO8JVsqjVlTJYoyHLrdipMujz-NvdjaqzE2HHQsUZUeW4EhaYaiUgNNlvnmJ923jLeQCSMTm9JNkYrvsc7_h&s=10",
  },
];

export default function ShoppingPanier() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrementClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecrementClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          const newCount = product.count - 1;
          return { ...product, count: newCount < 0 ? 0 : newCount };
        } else {
          return product;
        }
      })
    );
  }

  const totalItems = products.reduce((sum, p) => sum + p.count, 0);

  const totalPrice = products.reduce((sum, p) => sum + p.count * p.price, 0);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                {product.price.toFixed(2)} €
              </p>

              <div className="flex-grow"></div>

              <div className="flex items-center justify-center space-x-3 mt-2">
                <button
                  onClick={() => handleDecrementClick(product.id)}
                  disabled={product.count === 0}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={`Diminuer ${product.name}`}
                >
                  -
                </button>
                <span
                  className="text-2xl font-bold text-gray-900 w-12 text-center"
                  aria-label="Quantité"
                >
                  {product.count}
                </span>
                <button
                  onClick={() => handleIncrementClick(product.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110 flex items-center justify-center"
                  aria-label={`Augmenter ${product.name}`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Récapitulatif du Panier
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between text-lg">
            <span className="text-gray-600">Nombre d'articles:</span>
            <span className="font-bold text-gray-900">{totalItems}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold">
            <span className="text-gray-700">Montant du panier:</span>
            <span className="text-blue-600">{totalPrice.toFixed(2)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
