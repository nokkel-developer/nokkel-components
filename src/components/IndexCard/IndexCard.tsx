import React from "react";

import IndexCardStyles from "./indexCard.module.css";

const IndexCard = ({
  title,
  subtitle,
  to,
}: {
  title: string;
  subtitle: string;
  to: string;
}) => {
  return (
    <a href={to} data-testid="index-card-wrapper">
      <div className={IndexCardStyles.indexCardWrapper}>
        <div className={IndexCardStyles.indexCardContainer}>
          <div className={IndexCardStyles.indexCardImage}>?</div>
          <div className={IndexCardStyles.indexCardTextWrapper}>
            <h5 className={IndexCardStyles.indexCardTitle}>{title}</h5>
            <p className={IndexCardStyles.indexCardSubTitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default IndexCard;
