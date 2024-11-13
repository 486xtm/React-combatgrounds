import React from "react";

const CheckedIcon = () => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
    >
      <g filter="url(#filter0_dd_976_13051)">
        <path
          d="M3 11.0195C3 9.15959 3 8.22962 3.20445 7.46662C3.75925 5.39606 5.37653 3.77878 7.44709 3.22398C8.21008 3.01953 9.14006 3.01953 11 3.01953C12.8599 3.01953 13.7899 3.01953 14.5529 3.22398C16.6235 3.77878 18.2408 5.39606 18.7956 7.46662C19 8.22962 19 9.15959 19 11.0195C19 12.8795 19 13.8094 18.7956 14.5724C18.2408 16.643 16.6235 18.2603 14.5529 18.8151C13.7899 19.0195 12.8599 19.0195 11 19.0195C9.14006 19.0195 8.21008 19.0195 7.44709 18.8151C5.37653 18.2603 3.75925 16.643 3.20445 14.5724C3 13.8094 3 12.8795 3 11.0195Z"
          fill="#6F58F6"
        />
      </g>
      <path
        d="M15.1061 8.2266C15.4965 8.61704 15.4965 9.25005 15.1061 9.64052L10.4501 14.2973C10.0596 14.6879 9.42638 14.6879 9.03583 14.2974L7.207 12.4685C6.81653 12.0781 6.81653 11.445 7.207 11.0545C7.59747 10.6641 8.23053 10.6641 8.621 11.0545L9.743 12.1765L13.692 8.22667C14.0825 7.83614 14.7156 7.83611 15.1061 8.2266Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_dd_976_13051"
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
            result="effect1_dropShadow_976_13051"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_976_13051"
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
            result="effect2_dropShadow_976_13051"
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
            in2="effect1_dropShadow_976_13051"
            result="effect2_dropShadow_976_13051"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_976_13051"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckedIcon;
