import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login"
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.user);
  const {authUser} = user;
  console.log("user", user);
  console.log("authUser", authUser);
  
  return (
    <div className="App">
      <Routes>
        <Route element={authUser ? <Main /> : <Login />} path="/"></Route>
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
