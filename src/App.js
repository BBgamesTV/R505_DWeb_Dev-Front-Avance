import './App.css';
import buttonClick from "./composant/buttonClick";
import Counter from "./composant/Counter";
import MyComp from "./composant/Mycomp";
import CheckLike from "./composant/CheckLike";
import Myform from "./composant/Myform";
import Form8 from "./composant/Form8";
import Artistes from "./composant/Artistes";

function App() {
  return (
    <div className="App">
      <button onClick={buttonClick}>Clique ICI</button>
      <Counter />
      <MyComp />
      <CheckLike />
      <Myform />
      <Form8 />
      <Artistes />
    </div>
  );
}

export default App;
