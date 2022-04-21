import React, { useCallback, useContext } from "react";
import { Row } from "react-bootstrap";
import { AppContext } from "../../App.js";
import ReviewCards from "./ReviewCards.jsx";

function Review() {
  const { reviews } = useContext(AppContext);
  const cardsRow = [];

  console.log(reviews);
  reviews.forEach((review) => {
    cardsRow.push(<ReviewCards key={review.id} review={review} />);
  });

  return (
    <div>
      <h2>Reviews</h2>
      <Row>{reviews && cardsRow}</Row>
    </div>
  );
}

export default Review;
