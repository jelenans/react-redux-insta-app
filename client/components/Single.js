import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

  render() {
    // post code is the end part in the URL
    // it's accessed through params whicn comes from the Router
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        {/* pass along ALL THE PROPS ie posts & params */}
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;