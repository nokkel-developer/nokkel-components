import React from "react";

import "./imageCard.css";

const ImageCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}) => {
  return (
    <div data-testid="image-card-wrapper" className={"imageCardWrapper"}>
      <div className="imageCardImage"></div>
      <div className="imageCardTextWrapper">
        <h5 className="imageCardTitle">{title}</h5>
        <p className="imageCardSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
