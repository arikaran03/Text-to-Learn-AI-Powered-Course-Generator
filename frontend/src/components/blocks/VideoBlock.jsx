import React from 'react';

const VideoBlock = ({ url }) => (
  <div className="my-6 aspect-w-16 aspect-h-9">
    <iframe
      className="w-full h-full rounded-lg shadow-lg"
      src={url}
      title="Lesson Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoBlock;