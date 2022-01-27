import React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const StarRating = (props) => {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating name="read-only" value={props.stars} readOnly />
    </Box>
  );
};

export default StarRating;
