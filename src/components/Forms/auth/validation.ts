import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  cid: Yup.number()
    .typeError("CID must be a number")
    .required("CID is required*")
    .test(
      "len",
      "CID must be 11 digits long",
      (val) => val?.toString().length === 11
    ), 
  password: Yup.string().required("Password is required*"),
});

export const registerSchema = Yup.object().shape({
  cid: Yup.number()
    .typeError("CID must be a number")
    .required("CID is required*")
    .test(
      "len",
      "CID must be 11 digits long",
      (val) => val?.toString().length === 11
    ),
  password: Yup.string().required("Password is required*"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required*")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
});
