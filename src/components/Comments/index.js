import React, { Component } from "react";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import { StyledContainer } from "../shared-styles/styles.global";
import api from "../../services/comments.services";

export default class CommentContainer extends Component {
  state = {
    comments: [],
    confirmWindow: null
  };

  async componentDidMount() {
    const comments = await api.getAllComments();
    this.setState({
      comments
    });
  }

  _addComment = async data => {
    this.setState({
      confirmWindow: null
    });
    const newComment = await api.addComment(data);
    if (newComment) {
      this.setState({
        comments: this.state.comments.concat(newComment),
        confirmWindow: null
      });
    }
  };

  _deleteComment = async id => {
    const status = await api.deleteComment(id);
    if (status) {
      const filteredComments = this.state.comments.filter(
        comment => comment.id !== id
      );
      this.setState({
        comments: filteredComments,
        confirmWindow: null
      });
    }
  };

  _toggleConfirmWindow = id => {
    this.setState({
      confirmWindow: id
    });
  };

  render() {
    return (
      <StyledContainer column>
        <CommentForm
          _addComment={this._addComment}
          _toggleConfirmWindow={this._toggleConfirmWindow}
        />
        <CommentList
          comments={this.state.comments}
          confirmWindow={this.state.confirmWindow}
          _deleteComment={this._deleteComment}
          _toggleConfirmWindow={this._toggleConfirmWindow}
        />
      </StyledContainer>
    );
  }
}
