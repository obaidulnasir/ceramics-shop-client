import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";



const Register = () => {
  const {handleUserRegister, signInWithGoogle}=useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password, data.userName);
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
                  className="form-control"
                  placeholder="Your Name"
                  {...register("userName")}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
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
                  className="form-control"
                  placeholder="Password"
                  {...register("password")}
                />
                 {errors.exampleRequired && <span>This field is required</span>}
              </div>

              <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered? Login</Link>
            <p>------------------------------</p>
            <Button onClick={signInWithGoogle} className="px-5 py-2 mt-3 " variant="outline-dark">Sign in with Google</Button>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Register;
