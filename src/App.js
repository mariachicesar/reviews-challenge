import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Review from "./components/review/Review";
import Details from "./components/details/Details";
import * as reviewDataServices from "./services/reviewDataServices.js";

export const AppContext = createContext(null);

const REVIEWS = reviewDataServices.res;
function App() {
  const [replies, setReplies] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(REVIEWS);
  }, [reviews]);

  return (
    <div className="App">
      <AppContext.Provider value={{ replies, setReplies, reviews, setReviews }}>
        <Routes>
          <Route path="/reviews" element={<Review reviews={REVIEWS} />} />
          <Route path="/" element={<Review />} />
          <Route path="/details/:id" element={<Details reviews={REVIEWS} />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
