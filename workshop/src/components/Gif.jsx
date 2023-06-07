import React from 'react';

const Gif = (props) => {
  const { id } = props;
  const url = "https://media.giphy.com/media/${id}/giphy.gif";
  return (
    <div>
      <img src = (url) alt="" className="gif" />
    </div>
  );
};

export default Gif;
