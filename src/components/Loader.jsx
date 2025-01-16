import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <CircularProgress size={70} />
    </div>
  );
};

export default Loader;
