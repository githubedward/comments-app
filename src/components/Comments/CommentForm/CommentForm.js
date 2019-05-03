import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import validationSchema from "./validationSchema";
import {
  StyledForm,
  StyledContainer,
  StyledInput,
  StyledTextArea
} from "./styles.commentform";

const CommentForm = ({ _addComment, _toggleConfirmWindow }) => (
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
      onSubmit={(values, formikBag) => {
        _addComment({
          name: values.name,
          body: values.comment
        });
        formikBag.resetForm();
      }}
      validationSchema={validationSchema}
      render={({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting
      }) => {
        const isInputError = touched.name && errors.name;
        const isTextAreaError = touched.comment && errors.comment;
        const namePlaceholder =
          (isInputError && errors.name) || "Enter your name here";
        const textareaPlaceholder =
          (isTextAreaError && errors.comment && errors.comment) ||
          "Let us know what you think!";
        const toggleConfirmWindow = () => {
          _toggleConfirmWindow(null);
        };
        return (
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
              _toggleConfirmWindow(null);
              handleSubmit();
            }}
          >
            <StyledInput
              err={isInputError}
              autoComplete="off"
              type="text"
              name="name"
              placeholder={namePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={toggleConfirmWindow}
              value={values.name}
            />
            <StyledTextArea
              err={isTextAreaError}
              type="text"
              name="comment"
              placeholder={textareaPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={toggleConfirmWindow}
              value={values.comment}
            />
            <button
              type="submit"
              disabled={isSubmitting || isInputError || isTextAreaError}
            >
              Submit
            </button>
          </StyledForm>
        );
      }}
    />
  </StyledContainer>
);

CommentForm.propTypes = {
  _addComment: PropTypes.func.isRequired,
  _toggleConfirmWindow: PropTypes.func.isRequired
};

export default CommentForm;
