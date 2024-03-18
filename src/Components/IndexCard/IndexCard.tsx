import React from "react";
import styles from "./indexCard.module.css";

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
            <div className={styles.indexCardWrapper}>
                <div className={styles.indexCardContainer}>
                    <div className={styles.indexCardImage}>Img</div>
                    <div className={styles.indexCardTextWrapper}>
                        <h5 className={styles.indexCardTitle}>{title}</h5>
                        <p className={styles.indexCardSubTitle}>{subtitle}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default IndexCard;
