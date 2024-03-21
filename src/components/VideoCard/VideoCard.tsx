import React from "react";

import videoCardStyles from "./videoCard.module.css";

const videoCard = ({
  title,
  subtitle,
  videoSrc,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
}) => {
  return (
    <div
      data-testid="video-card-wrapper"
      className={videoCardStyles.videoCardWrapper}
    >
      <div className={videoCardStyles.videoCardvideo}>
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
      <div className={videoCardStyles.videoCardTextWrapper}>
        <h5 className={videoCardStyles.videoCardTitle}>{title}</h5>
        <p className={videoCardStyles.videoCardSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default videoCard;
