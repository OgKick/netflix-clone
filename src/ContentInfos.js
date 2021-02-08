import React from 'react';

const ContentInfos = ({
  title, text, imgUrl, side,
}) => (
  <div
    className={`content_container_infos ${side}`}
  >
    <div className="content_text">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
    <div className="content_image_container">
      <img src={imgUrl} alt={title} />
    </div>
  </div>
);


export default ContentInfos;