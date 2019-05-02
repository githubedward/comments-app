import React, { Component } from "react";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import { StyledContainer } from "../shared/styles.global";
import api from "../../services/comments.services";

export default class CommentContainer extends Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    const comments = await api.getAllComments();
    this.setState({
      comments
    });
  }

  addComment = async data => {
    const newComment = await api.addComment(data);
    if (newComment) {
      this.setState({
        comments: this.state.comments.concat(newComment)
      });
    }
  };

  render() {
    return (
      <StyledContainer column>
        <CommentForm addComment={this.addComment} />
        <CommentList
          comments={this.state.comments}
          deleteComment={api.deleteComment}
        />
      </StyledContainer>
    );
  }
}
