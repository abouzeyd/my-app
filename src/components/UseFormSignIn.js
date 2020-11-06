import { useState } from "react";
import { db } from "../firebase";

const UseFormSignIn = (Validation) => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn({
      ...signIn,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, handleSubmit, signIn, errors };
};

export default UseFormSignIn;
