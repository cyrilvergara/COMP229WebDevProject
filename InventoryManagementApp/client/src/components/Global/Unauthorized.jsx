import React from "react";
import { Typography, Box } from "@material-ui/core";

const Unauthorized = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h1" color="error">
        401 UNAUTHORIZED
      </Typography>
    </Box>
  );
};

export default Unauthorized;
