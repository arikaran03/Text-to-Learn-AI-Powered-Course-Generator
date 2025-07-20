import React from 'react';

const VideoBlock = ({ url }) => (
  <div className="lesson-block lesson-video-wrapper">
    <iframe
      src={url}
      title="Lesson Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoBlock;