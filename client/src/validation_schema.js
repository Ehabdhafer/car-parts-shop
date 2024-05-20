// validationSchema.js
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(10, "First name must be at most 10 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(10, "Last name must be at most 10 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .min(10, "Email must be at least 10 characters")
    .max(30, "Email must be at most 30 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must be at most 40 characters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
