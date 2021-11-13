import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
    // const { user } = useAuth();
    const [allProducts, setAllProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://polar-gorge-22890.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [allProducts]);
  
    // delete order
  const handleDelete = (id) => {
    const toDelete = window.confirm('Are you sure to delete this order?')
    if(toDelete){
      fetch(`https://polar-gorge-22890.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
            // setControl(true);
            alert("Successfully Deleted Product form Database")
        } else {
          //   setControl(false);
        }
      });
    }
  };

  return(
    <div className="my-5">
    <h3>Total orders: {allProducts.length}</h3>
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Image Link</th>
            <th>Action</th>
          </tr>
        </thead>
        {allProducts?.map((mo, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{mo?.productName}</td>
              <td>{mo?.price}</td>
              <td>{mo?.img}</td>
             <td> <button
                onClick={() => {
                  handleDelete(mo._id);
                }}
                className="btn bg-danger p-2"
              >Delete
              </button></td>
              {/* modal */}
              
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  </div>  
    );
};

export default ManageProducts;
