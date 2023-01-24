import {ProductList} from "./components/ProductList"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
