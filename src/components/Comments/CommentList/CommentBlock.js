import React from "react";
import PropTypes from "prop-types";
import IconDelete from "../../shared-icons/IconDelete";
import { StyledCommentBlock } from "./styles.commentlist";
import ConfirmDelete from "./ConfirmWindow";

const CommentBlock = ({
  comment,
  _deleteComment,
  _toggleConfirmWindow,
  confirmWindow
}) => (
  <StyledCommentBlock id={comment.id}>
    <div>
      <h2>{comment.name}</h2>
      <h4>{comment.body}</h4>
    </div>
    <button onClick={() => _toggleConfirmWindow(comment.id)}>
      <IconDelete />
    </button>
    {confirmWindow === comment.id && (
      <ConfirmDelete
        _deleteComment={() => {
          _deleteComment(comment.id);
        }}
        _toggleConfirmWindow={() => _toggleConfirmWindow(null)}
      />
    )}
  </StyledCommentBlock>
);

CommentBlock.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string
  }).isRequired,
  _deleteComment: PropTypes.func.isRequired,
  _toggleConfirmWindow: PropTypes.func.isRequired,
  confirmWindow: PropTypes.any
};

export default CommentBlock;
