import React from "react";

import "./imageCard.css";

const ImageCard = ({
  title,
  subtitle,
  imageSrc,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}) => {
  return (
    <div data-testid="image-card-wrapper" className={"imageCardWrapper"}>
      <div className="imageCardImageWrapper">
        {imageSrc && (
          <img className="imageCardImage" src={imageSrc} alt="placeholder" />
        )}
      </div>
      <div className="imageCardTextWrapper">
        <h5 className="imageCardTitle">{title}</h5>
        <p className="imageCardSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
