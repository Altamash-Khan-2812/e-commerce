import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/"></Route>
        <Route
          element={<FilteredProducts />}
          path="/filteredProducts/:type"
        ></Route>
        <Route
          element={<SingleProduct />}
          path="/filteredProducts/:type/:id"
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
