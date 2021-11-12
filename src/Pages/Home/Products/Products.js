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
      <h3>New Collection</h3>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {products.map(pd=>(
            <Col key={pd._insertId}>
              <Card>
                <Card.Img variant="top" src={pd.img} />
                <Card.Body>
                  <Card.Title>{pd.productName}</Card.Title>
                  <Card.Text>
                   Price: {pd.price} $
                  </Card.Text>
                </Card.Body>
                <Link to={`/orderPage/${pd._id}`}>
                <button >Buy Now</button>
                </Link>
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
