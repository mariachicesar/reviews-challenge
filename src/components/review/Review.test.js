import { render, screen } from "@testing-library/react";
import Review from "./Review.jsx";
import * as reviewDataServices from "../../services/reviewDataServices.js";

const REVIEWS =
  test("on intial render, will get data from reviewDataService and map into ReviewCards", () => {
    render(<Review reviews={REVIEWS} />);

    screen.debug();
  });
