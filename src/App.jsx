import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route element={<Main />} path="/"></Route>
      <Route element={<FilteredProducts />} path="/filteredProducts/:type"></Route>
    </Routes>
    </div>
  );
};

export default App;
