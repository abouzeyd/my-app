import React from "react";
import { Alert } from "react-bootstrap";

const FormSucces = () => {
  return (
    <div
      style={{
        width: "30em",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "20px",
        fontSize: "2em",
        fontWeight: "bold",
        color: "green",
      }}
    >
      <Alert variant="success">Success</Alert>
    </div>
  );
};

export default FormSucces;
