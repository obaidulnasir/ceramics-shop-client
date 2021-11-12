import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
    const {user}= useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
    console.log(data);
    fetch("https://polar-gorge-22890.herokuapp.com/addReview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(res =>res.json())
      .then(data => {
            alert("review added successfully!!")
            reset();
            console.log(data)
      })
  }
  return (
    <div>
      <Container>
        <div className="row w-50 mx-auto">
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
              {/* <small id="emailHelp" className="form-text text-muted">
                * We'll never share your email with anyone else.
              </small> */}
            </div>
            
            <div className="form-group">
              <label>Review</label>
              <textarea
                className="form-control"
                rows="3"
                {...register("review",{ required: true } )}
              ></textarea>
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

            <input type="submit" value="Add Review" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddReview;
