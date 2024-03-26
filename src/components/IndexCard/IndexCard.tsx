import React from "react";

import "./indexCard.css";

const IndexCard = ({
  title,
  subtitle,
  to,
}: {
  title?: string;
  subtitle?: string;
  to?: string;
}) => {
  return (
    <a href={to} data-testid="index-card-wrapper">
      <div className="indexCardWrapper">
        <div className="indexCardContainer">
          <div className="indexCardImage">?</div>
          <div className="indexCardTextWrapper">
            <h5 className="indexCardTitle">{title}</h5>
            <p className="indexCardSubTitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default IndexCard;
