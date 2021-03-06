import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";

const Login = () => {
  const { handleUserLogin, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleUserLogin(data.email, data.password, location, history);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <div className="row my-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control w-75"
                  placeholder="Enter email"
                  {...register("email")}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control w-75"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <input className="mt-3 btn btn-dark" type="submit" value="Login" />
            </form>
            <Link to="/register">New User? Register</Link>
            <p>------------------------------</p>
            <Button className="btn btn-outline-dark  fw-bold" onClick={handleGoogleSignIn} variant="contained">
            <i class="bi bi-google fs-5"></i> Google SignIn
            </Button>
          </div>
          <div className="col-md-6">
            <img style={{ filter: "grayscale(100%)" }} src="https://i.ibb.co/ZcNCpLF/pietrasiak.png" width="80%" alt="" />
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
