import React, {useState, useEffect} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts]= useState([]);
  useEffect(()=>{
    fetch("https://polar-gorge-22890.herokuapp.com/allProducts")
    .then(res => res.json())
    .then(data => setProducts(data));
  },[])
  return (
    <div className="my-5">
      <h3 className="text-center my-3">New Collection</h3>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {products.slice(4, 10).map(pd=>(
            <Col key={pd._insertId}>
              <Card className="p-3">
                <Card.Img variant="top" src={pd.img} />
                <Card.Body>
                  <Card.Title>{pd.productName}</Card.Title>
                  <Card.Text>
                   Price: {pd.price} $
                  </Card.Text>
                  <Card.Text className="p-2 text-muted">
                   {pd.description.slice(0,200)}....
                  </Card.Text>
                </Card.Body>
                <div className="text-center">
                <Link to={`/orderPage/${pd._id}`}>
                <button className="btn btn-dark" >Buy Now</button>
                </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
<h3>New Collection</h3>;
