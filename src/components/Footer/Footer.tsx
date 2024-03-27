import React from "react";
import { capitalize } from "../../utils/capitalize";
import "./footer.css";

const Footer = ({
  theme = "nokkel",
  pageName,
}: {
  theme: string;
  pageName?: string;
}) => {
  return (
    <div data-testid="footer-wrapper" className="footerWrapper">
      <div className="footerContainer">
        <p className="footerCopyright">© {capitalize(theme)}</p>
        <div className="footerSeparator" />
        <a href="/support" className="footerLink">
          {pageName || "Dashboard"}
        </a>
      </div>
    </div>
  );
};

export default Footer;
