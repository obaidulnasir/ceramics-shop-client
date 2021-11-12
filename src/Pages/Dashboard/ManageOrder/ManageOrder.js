import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
  const [allOrder, setAllOrder]= useState([]);
  useEffect(()=>{
    fetch("https://polar-gorge-22890.herokuapp.com/allOrders")
    .then(res=>res.json())
    .then(data => setAllOrder(data));
  },[allOrder]);

  // delete order
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://polar-gorge-22890.herokuapp.com/deleteOrder/${id}`, {
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
          <h4>Total Order: {allOrder.length}</h4>
          <h2>Manage Order</h2>

          <h3>My total orders: {allOrder.length}</h3>
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
          {allOrder?.map((mo, index) => (
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

export default ManageOrder;