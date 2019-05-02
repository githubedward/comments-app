import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(6, "Enter at least 6 characters")
    .required("What's your name?"),
  comment: Yup.string()
    .min(6, "Enter at least 6 characters")
    .required("What's on your mind?")
});
