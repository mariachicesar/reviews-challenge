import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ReviewCards = ({ review }) => {
  console.log(review, "reviewCard");

  const truncateString = (str, n) => {
    if (str.length > n) {
      return str.substring(0, n) + "...";
    } else {
      return str;
    }
  };

  return (
    <React.Fragment>
      <Col xs={6} md={4}>
        <Card className="m-4" border="info" style={{ width: "18rem" }}>
          <Card.Header>{review.place}</Card.Header>
          <Card.Body>
            <Card.Title>
              {" "}
              <ReactStars
                count={5}
                value={review.rating}
                size={24}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </Card.Title>
            <Card.Text>
              {truncateString(review.content, 30)}
              <Link key={review.id} to={`/details/${review.id}`}>
                more details
              </Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <row>
              {review.author} {truncateString(review.published_at, 15)}
            </row>
          </Card.Footer>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ReviewCards;
