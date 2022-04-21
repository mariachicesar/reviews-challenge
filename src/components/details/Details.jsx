import { Card, Button } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import ReactStars from "react-rating-stars-component";
import DetailsReply from "./DetailsReply";
import "./details.css";

function Details() {
  let navigate = useNavigate();
  const { reviews } = useContext(AppContext);
  const { id } = useParams();

  const reviewById = (id) => {
    return reviews.find((obj) => obj.id === id);
  };

  const findReviewById = useMemo(() => reviewById(id), [id]);

  const truncateString = (str, n) => {
    if (str.length > n) {
      return str.substring(0, n) + "...";
    } else {
      return str;
    }
  };

  const onGoBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="col-6" id="details-card">
      <Card className="m-4" border="info">
        <Card.Header>{findReviewById && findReviewById.place}</Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <ReactStars
              count={5}
              value={findReviewById && findReviewById.rating}
              size={24}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </Card.Title>
          <Card.Text>{findReviewById && findReviewById.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <row>
            {findReviewById && findReviewById.author}{" "}
            {truncateString(findReviewById && findReviewById.published_at, 15)}
          </row>
        </Card.Footer>
      </Card>

      <DetailsReply id={id} />

      <Button variant="secondary" type="button" onClick={onGoBackBtn}>
        Go Back
      </Button>
    </div>
  );
}
export default Details;
