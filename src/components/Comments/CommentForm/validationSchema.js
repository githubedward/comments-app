import * as Yup from "yup";

const message = "Enter at least 6 characters";
const nameMsg = `(Name) ${message}`;
const commentMsg = `(Comment) ${message}`;

export default Yup.object().shape({
  name: Yup.string()
    .min(6, nameMsg)
    .required(nameMsg),
  comment: Yup.string()
    .min(6, commentMsg)
    .required(commentMsg)
});
