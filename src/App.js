import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Register from './Pages/Register/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Register/Login/Login';
import PrivateRoute from './PrivateRoute/PageRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import OrderPage from './Pages/OrderPage/OrderPage';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orderPage/:id">
            <OrderPage></OrderPage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
