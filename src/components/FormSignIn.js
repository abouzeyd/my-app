import React from "react";
import UseForm from "./UseFormSignIn";
import Validation from "./Validation";

const FormSignIn = () => {
  const { handleChange, handleSubmit, signIn, errors } = UseForm(Validation);
  console.log(Validation);
  return (
    <form onSubmit={handleSubmit} className="form-inputs-signIn">
      <div className="form-input-signIn">
        {" "}
        <label htmlFor="email" className="form-label-signIn">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={signIn.email}
          placeholder="email"
          onChange={handleChange}
          className="input-signIn"
        />
      </div>
      {errors.email && <p>{errors.email}</p>}
      <div className="form-input-signIn">
        {" "}
        <label htmlFor="password" className="form-label-signIn">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={signIn.password}
          onChange={handleChange}
          placeholder="password"
          className="input-signIn"
        />
      </div>
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">SignIn</button>
    </form>
  );
};

export default FormSignIn;
