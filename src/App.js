import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Register from './Pages/Register/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Register/Login/Login';
import AllProducts from './Pages/AllProducts/AllProducts';
import OrderPage from './Pages/OrderPage/OrderPage';
import PrivateRoute from './Pages/Register/PrivateRoute/PrivateRoute';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import About from './Pages/About/About';


function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orderPage/:id">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
