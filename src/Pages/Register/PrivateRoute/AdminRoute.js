import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {

  const {isLoading, admin, user}= useAuth();
  if(isLoading){
    return  <Spinner animation="border" variant="success" />
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
     user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};


export default AdminRoute;