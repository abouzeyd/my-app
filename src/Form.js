import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import "./Form.css";
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

// import React from "react";
// import { useForm } from "react-hook-form";

// const SignIn = () => {
//   const { register, handleSubmit, errors } = useForm();

//   // const onSubmit = (e) => {
//   //   console.log(e);
//   // };
//   const onSubmit = (data, e) => console.log(data, e);

//   return (
//     <div className="input">
//       <form className="color" onSubmit={handleSubmit(onSubmit)}>
//         <div className="name">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             name="email"
//             ref={register({
//               required: true,
//               minLength: 4,
//             })}
//           />
//         </div>
//         {errors.email?.type === "required" && (
//           <p style={{ color: "red" }}>field require</p>
//         )}
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             ref={register({ required: true, minLength: 4 })}
//           />
//         </div>
//         <button type="submit">ok</button>
//       </form>
//       {errors.password?.type === "required" && (
//         <p style={{ color: "red" }}>Input obligatoire</p>
//       )}
//       {errors.password?.type === "minLength" && (
//         <p style={{ color: "red" }}>password too short</p>
//       )}
//     </div>
//   );
// };
// export default SignIn;
