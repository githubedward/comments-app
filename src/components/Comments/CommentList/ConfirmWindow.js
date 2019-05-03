import React from "react";
import PropTypes from "prop-types";
import { StyledConfirmDelete } from "./styles.commentlist";

const ConfirmDelete = ({ _deleteComment, _toggleConfirmWindow }) => (
  <StyledConfirmDelete>
    <p>Are you sure you want to delete this comment?</p>
    <div>
      <button onClick={_deleteComment}>Yes</button>
      <button onClick={_toggleConfirmWindow}>No</button>
    </div>
  </StyledConfirmDelete>
);

ConfirmDelete.propTypes = {
  _deleteComment: PropTypes.func.isRequired,
  _toggleConfirmWindow: PropTypes.func.isRequired
};

export default ConfirmDelete;
