import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
//   const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user?.email, myOrder]);

  // delete order
  //Delete Events
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteEvent/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
        //   setControl(true);
        } else {
        //   setControl(false);
        }
      });
    console.log(id);
  };

  return (
    <div>
      
      <h3>My total orders: {myOrder.length}</h3>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {myOrder?.map((mo, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{mo?.product}</td>
                <td>{mo?.email}</td>
                <td>{mo?.name}</td>
                <button
                  onClick={() => {
                    handleDelete(mo._id);
                  }}
                  className="btn bg-danger p-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;
