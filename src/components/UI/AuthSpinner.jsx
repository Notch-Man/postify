import React from "react";
import { HashLoader } from "react-spinners";

const AuthSpinner = () => {
  return (
    <HashLoader
      color="#7b7272"
      style={{
        alignSelf: "center",
      }}
    />
  );
};

export default AuthSpinner;
