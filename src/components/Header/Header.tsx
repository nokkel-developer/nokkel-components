import React from "react";
import "./header.css";
import { PoweredByNokkel } from "../../icons";
import { BrandIcon } from "../BrandIcon";

const Header = ({ theme = "nokkel" }: { theme: string }) => {
  return (
    <div data-testid="header-bar-wrapper" className="header">
      <div className="headerLogo">
        <a href="/">
          <BrandIcon theme={theme} />
        </a>
      </div>
      <PoweredByNokkel />
    </div>
  );
};

export default Header;
