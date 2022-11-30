import React from "react";
import { DotLoader } from "react-spinners";

const PageSpinner = () => {
  return (
    <DotLoader
      color="#7b7272"
      style={{
        alignSelf: "center",
      }}
    />
  );
};

export default PageSpinner;
