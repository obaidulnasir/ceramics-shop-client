import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit=(data)=>{
        fetch("https://polar-gorge-22890.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
          .then(res =>res.json())
          .then(data => {
                alert("Make admin successfully!!")
                reset();
          })
      }
    return (
        <div>
            <h3>Make admin</h3>
            <Container>
        <div className="row w-50 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                defaultValue=""
                {...register("email", { required: true })}
              />
              
            </div>

            <input className="btn btn-outline-dark my-3" type="submit" value="Make Admin" />
          </form>
        </div>
      </Container>
        </div>
    );
};

export default MakeAdmin;