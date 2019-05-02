import React from "react";
import { Formik } from "formik";
import validationSchema from "./validationSchema";
import { StyledForm, StyledContainer } from "./styles.commentform";

const CommentForm = ({ addComment }) => (
  <StyledContainer>
    <header>
      <img
        src="https://media.agilitycms.com/logos/Agility-logo-2014.svg"
        alt="Agility Logo"
      />
      <h1>Comment Application</h1>
    </header>
    <Formik
      initialValues={{ name: "", comment: "" }}
      onSubmit={values => {
        alert(
          JSON.stringify({
            name: values.name,
            body: values.comment
          })
        );
        addComment({
          name: values.name,
          body: values.comment
        });
      }}
      validationSchema={validationSchema}
      render={({ handleBlur, handleChange, handleSubmit, values, errors }) => {
        return (
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <textarea
              type="text"
              name="comment"
              placeholder="Let us know what you think!"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
            <button type="submit">Submit</button>
          </StyledForm>
        );
      }}
    />
  </StyledContainer>
);

export default CommentForm;
