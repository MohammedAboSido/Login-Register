import * as Yup from "yup";
export const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});
