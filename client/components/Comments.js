import React from 'react';

class Comments extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  // instead of creating a separate component for Comment
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>

    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    // `.value` bcs this.refs.author gives the whole HTML element
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // got `addComment` f-ion in props through `connect` f-ion
    this.props.addComment(postId, author, comment);
    // reset form (`reset`-> regular JS method that lives inside every form)
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {/* instead of creating function inside map, we reference renderComment */}
        {this.props.postComments.map(this.renderComment)}
        {/* putting refs to get the data from inputs */}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;