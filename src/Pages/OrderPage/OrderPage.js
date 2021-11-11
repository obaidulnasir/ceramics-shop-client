import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import Navigation from "../shared/Navigation/Navigation";

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const {user}= useFirebase();

  const { id } = useParams();

  const {register, handleSubmit, reset, formState: { errors }} = useForm();

  //single order
  useEffect(() => {
    fetch(`https://polar-gorge-22890.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  //place order
  const onSubmit = (data) => {
    fetch("http://localhost:5000/placeOrder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(res =>res.json())
      .then(data => {
            alert("product added successfully!!")
            reset();
            console.log(data)
      })
  };


  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="name"
                  className="form-control"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  {...register("userName", { required: true })}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
                <small id="emailHelp" className="form-text text-muted">
                  * We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Product</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={order.productName}
                  placeholder=""
                  {...register("product", { required: true })}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="+880 "
                  placeholder=""
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" rows="3" {...register("address")} >

                </textarea>
              </div>
              {/* <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...register("password",  { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div> */}

              <input type="submit" value="Place Order" />
            </form>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderPage;
