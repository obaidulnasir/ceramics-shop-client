import React from "react";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import MyOrder from "../MyOrder/MyOrder";
import AddReview from "../AddReview/AddReview";
import PayNow from "../PayNow/PayNow";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Register/PrivateRoute/AdminRoute";
import "./Dashboard.css";
import ManageProducts from "../ManageProducts/ManageProducts";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, user, handleLogout } = useAuth();
  return (
    <div className="">
      <Navigation></Navigation>

      <div className="body">
        <div class="sidebar">
          <div className="dashboard">
            <div className="text-center">
              <i class="bi bi-person-circle fs-1"></i>
              <h5>{user.displayName || user.email}</h5>
              <hr />
            </div>
            <Link className="text-decoration-none" to={`${url}`}>
              <li className="dashboard-menu">My Order</li>
            </Link>
            <Link to={`${url}/pay`}>
              <li className="dashboard-menu">Pay Now</li>
            </Link>
            <Link to={`${url}/addReview`}>
              <li className="dashboard-menu">Add Review</li>
            </Link>
            <hr />
            {admin && (
              <div>
                <Link to={`${url}/manageOrder`}>
                  <li className="dashboard-menu">Manage Order</li>
                </Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <li className="dashboard-menu">Add Product</li>
                </Link>
                <Link to={`${url}/manageProduct`}>
                  <li className="dashboard-menu">Manage Product</li>
                </Link>
              </div>
            )}
            <div className="text-center">
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div class="content">
          <Switch>
            <Route exact path={path}>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route exact path={`${path}/pay`}>
              <PayNow></PayNow>
            </Route>
            <AdminRoute exact path={`${path}/manageOrder`}>
              <ManageOrder></ManageOrder>
            </AdminRoute>
            <AdminRoute exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path={`${path}/addProduct`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageProduct`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </div>
      </div>

      {console.log(admin)}
    </div>
  );
};

export default Dashboard;
