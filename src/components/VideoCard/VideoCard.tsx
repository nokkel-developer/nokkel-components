import React from "react";

import "./videoCard.css";

const videoCard = ({
  title,
  subtitle,
  videoSrc,
}: {
  title: string;
  subtitle?: string;
  videoSrc: string;
}) => {
  return (
    <div data-testid="video-card-wrapper" className="videoCardWrapper">
      <div className="videoCardvideo">
        {videoSrc && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="videoCardTextWrapper">
        <h5 className="videoCardTitle">{title}</h5>
        <p className="videoCardSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default videoCard;
