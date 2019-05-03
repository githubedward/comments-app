import * as Yup from "yup";

const message = "Enter at least 6 characters";

export default Yup.object().shape({
  name: Yup.string()
    .min(6, message)
    .required(message),
  comment: Yup.string()
    .min(6, message)
    .required(message)
});
