import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://polar-gorge-22890.herokuapp.com/addProduct", {
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
      <Container>
        <div className="row w-50 mx-auto">
          <h3 className="text-center">Add Product</h3>
          <br />
          <div className="col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Your Name"
                  {...register("productName")}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder=""
                  {...register("price")}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="image bb link"
                  {...register("img")}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  class="form-control"
                  rows="3"
                  {...register("description")}
                ></textarea>
              </div>

              <input
                className="btn btn-outline-dark my-3"
                type="submit"
                value="Add Product"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddProducts;
