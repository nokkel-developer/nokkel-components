import ImageCardStyles from "./imageCard.module.css";

const ImageCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}) => {
  return (
    <div data-testid="image-card-wrapper" className={ImageCardStyles.imageCardWrapper}>
      <div className={ImageCardStyles.imageCardImage}></div>
      <div className={ImageCardStyles.imageCardTextWrapper}>
        <h5 className={ImageCardStyles.imageCardTitle}>{title}</h5>
        <p className={ImageCardStyles.imageCardSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
