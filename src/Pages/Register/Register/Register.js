import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";



const Register = () => {
  const {handleUserRegister, signInWithGoogle}=useAuth();
  const location=useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    handleUserRegister(data.email, data.password, data.userName, location, history);
    reset();
  };

  return (
    <div className="">
      <Navigation></Navigation>
      <Container>
        <div className="row my-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="name"
                  className="form-control w-75"
                  placeholder="Your Name"
                  {...register("userName", { required: true })}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control w-75"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                />
                 {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <input className="btn btn-outline-dark  fw-bold mt-2" type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered? Login</Link>
            <p>------------------------------</p>
            <Button onClick={signInWithGoogle} className="px-5 py-2 mt-3 " variant="outline-dark"><i class="bi bi-google fs-5"></i> Sign in with Google</Button>
          </div>
          <div className="col-md-6">
            <img style={{ filter: "grayscale(100%)" }} width="80%" src="https://i.ibb.co/Lh9JX4M/04086f4b8b394ba7bdaa.jpg" alt="" />
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Register;
