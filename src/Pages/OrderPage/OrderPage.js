import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Navigation from "../shared/Navigation/Navigation";

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //single order
  useEffect(() => {
    fetch(`https://polar-gorge-22890.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  //place order
  const onSubmit = (data) => {
    fetch("https://polar-gorge-22890.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("product added successfully!!");
        reset();
        console.log(data);
      });
  };

  return (
    <div>
      <Navigation></Navigation>
      <Container className="my-5">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="name"
                  className="form-control"
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
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
                <textarea
                  className="form-control"
                  rows="3"
                  {...register("address")}
                ></textarea>
              </div>
              <input className="btn btn-outline-dark my-2" type="submit" value="Place Order" />
            </form>
          </div>
          <div className="col-md-6">
            <>
              <Card className="text-center p-4">
                <Card.Img rounded width="70%" src={order.img} />
                <Card.Title className="my-3 fs-2 fw-bolder">{order.productName}</Card.Title>
                <Card.Title className="my-3 fs-4">Price: {order.price} $</Card.Title>
                <Card.Body>
                  <Card.Text className="text-muted">
                    {order.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderPage;
