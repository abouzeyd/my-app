import { useState, useEffect } from "react";
import { db } from "../firebase";

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIssubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIssubmitting(true);
    db.collection("register")
      .add({
        username: values.username,
        email: values.email,
        password: values.password,
        password2: values.password2,
      })
      .then(() => {});
    setValues("");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default UseForm;
