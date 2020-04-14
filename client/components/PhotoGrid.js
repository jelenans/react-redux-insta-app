import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {

  render() {
    return (
      <div className="photo-grid">
        {/* key is used in React and u cannot access it as this.props.key -> hv to pass separately */}
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    );
  }
}

export default PhotoGrid;