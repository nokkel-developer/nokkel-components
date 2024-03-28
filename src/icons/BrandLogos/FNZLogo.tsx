import React from "react";

const FNZIcon = ({ fill = "#eee", height = 50, width = 100 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 292 100"
    >
      <path
        fill={fill}
        d="M 0 14.286 h 50 v 8.673 H 10.205 v 22.45 H 47.96 v 8.674 H 10.204 v 31.631 H 0 V 14.286 z m 107.757 34.183 c 0 11.123 0 15.92 0.51 22.45 h -0.408 c -2.348 -4.083 -6.021 -10.204 -13.776 -21.224 l -24.591 -35.41 H 58.777 v 71.43 H 68.98 V 51.53 c 0 -11.123 0 -15.919 -0.51 -22.45 h 0.407 c 2.347 4.082 6.021 10.204 13.776 21.226 l 24.592 35.407 h 10.714 V 14.286 h -10.203 v 34.183 z m 73.199 28.572 H 139.12 l 40.306 -54.082 v -8.673 h -51.531 v 8.673 h 39.286 L 126.874 77.04 v 8.673 h 54.082 V 77.04 z M 291.846 100 h -100 V 0 h 100 v 100 z m -10.892 -21.747 h -78.216 v 6.25 h 78.216 v -6.25 z"
      ></path>
    </svg>
  );
};

export default FNZIcon;