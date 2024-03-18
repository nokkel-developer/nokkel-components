import FooterStyles from "./footer.module.css";

const Footer = () => {
  return (
    <div data-testid="footer-wrapper" className={FooterStyles.footerWrapper}>
      <div className={FooterStyles.footerContainer}>
        <p className={FooterStyles.footerCopyright}>© Nokkel</p>
        <div className={FooterStyles.footerSeparator} />
        <a href="/support" className={FooterStyles.footerLink}>
          Help and support
        </a>
      </div>
    </div>
  );
};

export default Footer;
