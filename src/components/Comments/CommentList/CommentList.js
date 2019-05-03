import React from "react";
import PropTypes from "prop-types";
import { StyledCommentList } from "./styles.commentlist";
import CommentBlock from "./CommentBlock";

const CommentList = props => (
  <StyledCommentList>
    {props.comments &&
      props.comments
        .sort((a, b) => b.id - a.id)
        .map(comment => (
          <CommentBlock
            key={comment.id}
            comment={comment}
            _deleteComment={props._deleteComment}
            {...props}
          />
        ))}
  </StyledCommentList>
);

CommentList.propTypes = {
  props: PropTypes.shape({
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        comment: PropTypes.string
      })
    ).isRequired
  })
};

export default CommentList;
