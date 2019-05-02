import React from "react";
import { StyledCommentBlock, StyledCommentList } from "./styles.commentlist";

// When component becomes large, CommentBlock could be moved to a separate file
const CommentBlock = ({ comment }) => (
  <StyledCommentBlock id={comment.id}>
    <h2>{comment.name}</h2>
    <h4>{comment.body}</h4>
  </StyledCommentBlock>
);

const CommentList = ({ comments }) => (
  <StyledCommentList>
    {comments
      .sort((a, b) => b.id - a.id)
      .map(comment => (
        <CommentBlock key={comment.id} comment={comment} />
      ))}
  </StyledCommentList>
);

export default CommentList;
