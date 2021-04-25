import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddService from "./components/Dashboard/AddService/AddService";
import Shop from "./components/Shop/Shop";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail/ProductsDetail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addproducts">
            <AddService />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/productDetail/:id">
            <ProductsDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
