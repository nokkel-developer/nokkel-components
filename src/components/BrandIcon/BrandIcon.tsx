import React from "react";
import { AvivaLogo, QuilterLogo, FNZLogo } from "../../icons";

const Logo = ({ theme }: { theme: string }) => {
  switch (theme) {
    case "aviva":
      return <AvivaLogo />;
    case "quilter":
      return <QuilterLogo height={40} width={110} />;
    case "nokkel":
    default:
      return <FNZLogo />;
  }
};

export default Logo;
