export default function Validation(signIn) {
  let errors = {};

  if (!signIn.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signIn.email)) {
    signIn.email = "Email is not valid";
  }
  if (!signIn.password) {
    errors.password = "Password is required";
  } else if (signIn.password.length < 5) {
    errors.password = "Password need to be 5 characters or more";
  }
  return errors;
}
