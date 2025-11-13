import "./App.css";
import buttonClick from "./composant/buttonClick";
import Counter from "./composant/Counter";
import MyComp from "./composant/Mycomp";
import CheckLike from "./composant/CheckLike";
import Myform from "./composant/Myform";
import Form8 from "./composant/Form8";
import Artistes from "./composant/Artistes";
import ShoppingList from "./composant/ShoppingList";
import ShoppingCart from "./composant/ShoppingCart";

function App() {
  return (
    <div className="text-center p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Application React Avancée
      </h1>

      <button
        onClick={buttonClick}
        className="bg-green-600 text-white py-4 px-8 text-center text-base m-1 cursor-pointer hover:bg-green-700 rounded-lg shadow-md"
    >
        Clique ICI
      </button>

      <div className="max-w-4xl mx-auto space-y-6 mt-6">
        <Counter />
        <MyComp />
        <CheckLike />
        <Myform />
        <Form8 />
        <Artistes />
        <ShoppingList />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
