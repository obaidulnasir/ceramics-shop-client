import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navigation from "../shared/Navigation/Navigation";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://polar-gorge-22890.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

//   Single product 
  const handleSingleProduct = (id)=>{
    console.log(id);
    fetch(`https://polar-gorge-22890.herokuapp.com/${id}`, {
      method: "GET",
      // headers: { "content-type": "application/json" },
      // body: JSON.stringify({id})
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


  return (
    <div>
      <Navigation></Navigation>
      <Container className="my-5">
      <Row xs={1} md={4} className="g-4">
          {allProducts.map(pd=>(
            <Col key={pd._id}>
              <Card className="pb-3">
                <Card.Img variant="top" width="70%" src={pd.img} />
                <Card.Body>
                  <Card.Title>{pd.productName}</Card.Title>
                  <Card.Text >
                   Price: {pd.price} $
                  </Card.Text>
                </Card.Body>
               <div className="text-center">
               <Link to={`/orderPage/${pd._id}`}>
                <button className="btn btn-outline-dark" onClick={()=>handleSingleProduct(pd._id)}>Buy Now</button>
                </Link>
                </div>              
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
<h3>All Products here</h3>;
