import React from "react";

const UncheckedIcon = () => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
    <g filter="url(#filter0_dd_976_13005)">
      <path
        d="M3 11.0195C3 9.15959 3 8.22962 3.20445 7.46662C3.75925 5.39606 5.37653 3.77878 7.44709 3.22398C8.21008 3.01953 9.14006 3.01953 11 3.01953C12.8599 3.01953 13.7899 3.01953 14.5529 3.22398C16.6235 3.77878 18.2408 5.39606 18.7956 7.46662C19 8.22962 19 9.15959 19 11.0195C19 12.8795 19 13.8094 18.7956 14.5724C18.2408 16.643 16.6235 18.2603 14.5529 18.8151C13.7899 19.0195 12.8599 19.0195 11 19.0195C9.14006 19.0195 8.21008 19.0195 7.44709 18.8151C5.37653 18.2603 3.75925 16.643 3.20445 14.5724C3 13.8094 3 12.8795 3 11.0195Z"
        fill="white"
      />
      <path
        d="M4 11.0195C4 9.09521 4.00859 8.32921 4.17037 7.72544C4.63271 5.99998 5.98044 4.65224 7.7059 4.1899C8.30968 4.02812 9.07568 4.01953 11 4.01953C12.9243 4.01953 13.6903 4.02812 14.2941 4.1899C16.0196 4.65224 17.3673 5.99998 17.8296 7.72544C17.9914 8.32921 18 9.09521 18 11.0195C18 12.9439 17.9914 13.7098 17.8296 14.3136C17.3673 16.0391 16.0196 17.3868 14.2941 17.8492C13.6903 18.0109 12.9243 18.0195 11 18.0195C9.07568 18.0195 8.30968 18.0109 7.7059 17.8492C5.98044 17.3868 4.63271 16.0391 4.17037 14.3136C4.00859 13.7098 4 12.9439 4 11.0195Z"
        stroke="#8C8A94"
        stroke-width="2"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_976_13005"
        x="0"
        y="0.0195312"
        width="22"
        height="23"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_976_13005"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.92549 0 0 0 0 0.92549 0 0 0 0 0.929412 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_976_13005"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_976_13005"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0666667 0 0 0 0 0.0470588 0 0 0 0 0.133333 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_976_13005"
          result="effect2_dropShadow_976_13005"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_976_13005"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  );
};

export default UncheckedIcon;
