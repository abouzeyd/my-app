import React, { useState } from "react";
// import "./Form";
import FormSignUp from "../components/FormSignUp";
import FormSucces from "./FormSucces";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSucces />}
    </div>
  );
};

export default Form;
