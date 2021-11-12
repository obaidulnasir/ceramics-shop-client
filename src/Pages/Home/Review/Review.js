import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://polar-gorge-22890.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="App">
      <h3>Our Customer Says</h3>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {review.map((rv) => (
            <Col key={rv._insertId}>
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {" "}
                      {rv.review}{" "}
                    </p>
                    <footer className="blockquote-footer">
                      {rv.userName}{" "}
                      {/* <cite title="Source Title">Source Title</cite> */}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
