import * as yup from "yup";

const SignUpSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username is too short!")
    .max(25, "Username is too long!")
    .required("Username is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "Password should be at least 6 characters and should have at least one uppercase and one numeric."
    )
    .required("Password is required!"),
});

export default SignUpSchema;
