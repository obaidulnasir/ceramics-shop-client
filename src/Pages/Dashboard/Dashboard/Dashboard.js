import React from "react";
import {  } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import MyOrder from "../MyOrder/MyOrder";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="">
      <Navigation></Navigation>
      
       
        <div>
          <div>
            <div className="dashboard-container ">
              <div className="row">
                <div className="col-md-3 ">
                  <div className="dashboard">
                    <h5>Dashboard</h5>
                    <Link to={`${url}`}>
                      <li className="dashboard-menu mt-5">My Order</li>
                    </Link>
                    <Link to={`${url}/manageOrder`}>
                        <li className="dashboard-menu">Manage Order</li>
                      </Link>
                    <Link to={`${url}/makeAdmin`}>
                        <li className="dashboard-menu">Make Admin</li>
                      </Link>
                    <Link to={`${url}/addProduct`}>
                        <li className="dashboard-menu">Add Product</li>
                      </Link>

                    {/* <Link to={`${url}/BookingList`}>
                      <li className="dashboard-menu mt-5">Booking list</li>
                    </Link>
                    <Link to={`${url}/review`}>
                      <li className="dashboard-menu mt-5">Review</li>
                    </Link> */}

                    {/* <div className="admin-dashboard">
                      <li className="dashboard-menu mt-5">Orders list</li>
                      <Link to={`${url}/addService`}>
                        <li className="dashboard-menu">Add Service</li>
                      </Link>
                      <Link to={`${url}/makeAdmin`}>
                        <li className="dashboard-menu">Make Admin</li>
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-9">
                  <Switch>
                    <Route exact path={path}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route exact path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route exact path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
