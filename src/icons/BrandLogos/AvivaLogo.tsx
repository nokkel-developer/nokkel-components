import React from "react";

const AvivaLogo = ({ width = 130, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 130 24">
      <defs>
        <path
          id="a"
          d="M2.884.092L.964 19.921a78.37 78.37 0 013.813-.325L2.885.092h-.001z"
        />
        <path
          id="c"
          d="M.528.116l1.89 19.457a81.728 81.728 0 014.617-.142L7.041.116.528.113v.003z"
        />
        <path
          id="e"
          d="M0 .092l.01 23.544c4.008-1.753 9.228-3.06 15.135-3.715L17.065.092V.09L0 .092z"
        />
        <path
          id="g"
          d="M.002.223V.83c.418.075 1.913.511 1.913 1.575v17.04h5.061V.222H.002z"
        />
        <path
          id="i"
          d="M6.292.223V.83c.612.128 1.942.5 1.403 1.7L.148 19.443h3.987L6.5 14.171h8.361l2.067 5.273h5.244L14.68.224H6.292zm4.668 4l2.964 7.56H7.57l3.39-7.56z"
        />
        <path
          id="k"
          d="M7.08.222V.83c.61.128 1.942.5 1.402 1.7L.936 19.443h3.987l2.36-5.273h8.362l2.068 5.273h5.249L15.465.222H7.08zm4.667 4l2.964 7.562H8.357l3.39-7.561z"
        />
        <path
          id="m"
          d="M19.105.223l-5.869 14.095L7.65.223H.538V.83c.821.158 1.743.511 2.164 1.575l6.751 17.04h5.434L22.891.222h-3.786z"
        />
        <path
          id="o"
          d="M19.474.223l-5.869 14.095L8.02.223H.906V.83c.823.158 1.744.511 2.166 1.575l6.749 17.04h5.435L23.262.222h-3.788z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(14.182)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#FFD400"
            d="M-4.946 25.83h15.633V-5.817H-4.946z"
            mask="url(#b)"
          />
        </g>
        <g transform="translate(16.545)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <path
            fill="#66B24C"
            d="M-5.38 25.482h18.33V-5.796H-5.38z"
            mask="url(#d)"
          />
        </g>
        <mask id="f" fill="#fff">
          <use xlinkHref="#e" />
        </mask>
        <path
          fill="#004FB6"
          d="M-5.91 29.545h28.885V-5.819H-5.91z"
          mask="url(#f)"
        />
        <g transform="translate(75.636)">
          <mask id="h" fill="#fff">
            <use xlinkHref="#g" />
          </mask>
          <path
            fill="#004FB6"
            d="M-5.907 25.354h18.792v-31.04H-5.907z"
            mask="url(#h)"
          />
        </g>
        <g transform="translate(29.545)">
          <mask id="j" fill="#fff">
            <use xlinkHref="#i" />
          </mask>
          <path
            fill="#004FB6"
            d="M-5.763 25.354H28.08v-31.04H-5.763z"
            mask="url(#j)"
          />
        </g>
        <g transform="translate(106.364)">
          <mask id="l" fill="#fff">
            <use xlinkHref="#k" />
          </mask>
          <path
            fill="#004FB6"
            d="M-4.974 25.354h33.843v-31.04H-4.974z"
            mask="url(#l)"
          />
        </g>
        <g transform="translate(85.09)">
          <mask id="n" fill="#fff">
            <use xlinkHref="#m" />
          </mask>
          <path
            fill="#004FB6"
            d="M-5.373 25.354H28.8v-31.04H-5.373z"
            mask="url(#n)"
          />
        </g>
        <g transform="translate(49.636)">
          <mask id="p" fill="#fff">
            <use xlinkHref="#o" />
          </mask>
          <path
            fill="#004FB6"
            d="M-5.003 25.354h34.174v-31.04H-5.003z"
            mask="url(#p)"
          />
        </g>
      </g>
    </svg>
  );
};

export default AvivaLogo;
