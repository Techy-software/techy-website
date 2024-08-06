// RatingBlock.js
import React from "react";
import Rating from "@mui/material/Rating";

const RatingBlock = ({ rating }) => {
  return (
    <div className="flex items-center">
      <Rating name="read-only" value={rating} precision={0.5} readOnly />
    </div>
  );
};

export default RatingBlock;
