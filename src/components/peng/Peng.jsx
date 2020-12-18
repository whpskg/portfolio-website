import React from "react";
import "./Peng.css";

export default function Peng(props) {
  return (
    <div
      className="logo-peng"
      style={{
        transform: `scale(${
          window.innerWidth > 1800 ? 1 : window.innerWidth / 1800
        })`,
      }}
    >
      <svg width="500" height="600">
        <defs>
          <clipPath id="peng-8">
            <path
              d="M304.4,238.7c0.3,5.4,0.8,13.2,1.2,17.3c0.6,8.3-1.3,16.6-8.1,34.2c-3.3,8.5-3.5,9.7-3.5,21
c0,11.8,0,12,2.8,14.8c5.2,5.2,7.9,4.9,29.6-2.4c33.2-11.1,58.2-23.2,84-40.4c7.6-5,14.7-9.2,15.7-9.2c1.1,0,2.9,1,4,2.1
c2.1,2.1,2.1,2.8,1.6,16.8c-0.9,24.6-9,65.5-16.7,84.1c-7.8,18.8-17.6,29-28,29c-1.9,0-24-3.2-48.9-6.9c-42.1-6.4-45.6-6.8-46.8-5.3
c-0.7,0.9-1.2,2.1-1.2,2.7c0,0.5,4.6,3.7,10.4,6.9l10.4,5.9l1.2,5.1c1,4,2.4,6.2,6.8,10.6c6.7,6.7,14.3,10.8,28.2,15.4
c27.1,9,49.7,11.6,58.9,6.7c11.4-6,19.3-15.3,27.6-32.6c8.5-17.9,14.4-37.7,19.9-67.8c2.3-13,2.5-15.9,2.5-46
c0-29-0.2-32.6-1.9-36.2c-4.1-9-13.3-13.5-27.7-13.5c-13.9,0-32.1,6.4-73.7,26c-20.5,9.7-21.9,10.2-23.6,8.6
c-1.8-1.6-1.8-1.9,0.1-10.9c1.6-7.6,1.8-10.3,0.9-15.5c-1.4-8.8-6-18.2-12.2-24.7c-4.8-5.1-5.5-5.5-9.7-5.5h-4.4L304.4,238.7z"
            />
          </clipPath>
          <clipPath id="peng-7">
            <path
              d="M363,204c-0.1-0.1-0.2-0.2-0.3-0.3l0,0.1l-7.6-5.2c-4.2-2.9-10.2-6.3-13.3-7.6c-4.7-2-5.6-2.6-4.8-4
c-6-2-14,1-17,4c-0.4,0.5-0.8,1.1-1.2,1.7c0.4,0.2,0.8,0.5,1.4,1c1.1,1,3.5,4.5,5.4,7.9l3.4,6.2l-2.5,7c-3.1,8.6-3.1,11.3-0.2,14
c5,4.7,13.4,5.4,25.4,2.3c6.1-1.6,8.3-1.9,8.7,0.8C363.9,223.6,363.7,213.5,363,204z"
            />
          </clipPath>
          <clipPath id="peng-6">
            <path
              d="M398.1,138.3c-6.9-8.3-16.7-8.2-34.8,0.4c-4.6,2.2-7.8,3.2-8.4,2.6c-0.6-0.6,0.1-3.8,1.6-8.3
c1.4-4,2.5-8,2.5-8.7c0-2.2-7.8-13.2-13.9-19.7c-8.6-9-14.6-11.3-21.6-8.2c-5.7,2.5-6.9,4.8-6.1,12c0.6,5.6,0.3,7.2-2,12.3
c-9.3,20.8-15.1,41.3-16.1,56.9c-0.9,15.2,0.9,18.4,10.5,18.4c3.6,0,5.4-0.5,6.7-2c1.1-1.3,1.6-1.7,2.3-1.3c0.4-0.6,0.8-1.1,1.2-1.7
c3-3,11-6,17-4c0,0,0-0.1,0-0.1c0.6-0.9,2.6-2.7,4.6-4c3.6-2.2,18.7-7.9,21.2-7.9c0.9,0,1.2,2.3,1.2,8.4c0,4.5-0.3,11-0.6,14.3
l-0.7,6c0.1,0.1,0.2,0.2,0.3,0.3c0.7,9.5,0.9,19.6-2.6,27.9c0.2,1.4,0,3.5-0.5,6.6c-0.9,6.6-0.8,7.1,1.2,8.7c3.2,2.7,7.3,2.3,10.1-1
c4-4.7,5.6-10,9.8-32.2c6.7-35.3,12.6-56.7,17-62.3C400.6,148.4,400.6,141.3,398.1,138.3z"
            />
          </clipPath>
          <clipPath id="peng-5">
            <path
              d="M249,269c-0.3-3-1.5-4.8-3.1-5.8c0.1,0.6,0.1,1.4,0.1,2.2c0,5.3-2.7,8.4-5.8,6.7c-1.6-0.9-5.4-4.7-7.2-7.2
c0,0,0,0,0,0.1c0,0,0,0,0-0.1c-0.6-0.8-1-1.5-1-1.8c0-0.2,0.1-0.6,0.2-1.1c-0.1,0-0.1,0-0.2,0c-4.3,15-4.5,30-3.5,44.9l1.4-2.9h3.2
c1.8,0,5.2,0.9,7.5,2.1c3.5,1.7,5.8,4.2,7.1,7.9C251.2,299.4,251.5,283.9,249,269z"
            />
          </clipPath>
          <clipPath id="peng-4">
            <path
              d="M247,206c-2-2-4,0-5,0c-8.6,16.3-19,38-9.4,54.7c0.9-3,2.8-7.7,3.1-7.7c0.3,0,2.7,1.8,5.4,4.1
c2.9,2.4,4.1,3.6,4.6,5.2C244,243.2,253.7,224.1,247,206z M231.8,243.3c-1.7-1.5-1.7-1.7-0.2-3.5c2.4-2.6,3.4-2.3,3.4,1
C235,244.6,234.1,245.4,231.8,243.3z M244,207.6c0-0.9,0.7-1.6,1.5-1.6s1.5,0.2,1.5,0.4c0,0.2-0.7,0.9-1.5,1.6
C244.3,209,244,209,244,207.6z"
            />
          </clipPath>
          <clipPath id="peng-3">
            <path
              id="peng-3"
              d="M166,218c-0.4-1-1.2-1.4-2.3-1.4c0,0.7,0.1,1.4,0.1,2.2c0.4,7.7,0.2,8.9-1.5,10.5c-1.9,1.6-2.2,1.6-8-2.2
c-3.4-2.2-5.6-4-6.7-5.8c-0.2,0-0.4,0-0.5,0c2,28.6-9.4,60.4-5.7,87.8c1.4-3.3,3.6-6.7,5.9-8.6c1.7-1.5,5.4-3.8,8.1-5.2l5.1-2.5
l1.9,2.3c1.8,2.2,1.9,3.7,1.5,17.9c0,0.5,0,0.9-0.1,1.4c0.1-0.5,0.2-0.9,0.3-1.4C168,281,177,247,166,218z"
            />
          </clipPath>
          <clipPath id="peng-2">
            <path
              d="M362,332.3c-4.1-0.3-14.5,1.4-40.5,6.6c-19.2,3.9-36.5,7.1-38.5,7.1c-2.7,0-4.3-0.7-6.2-2.8
c-2.6-2.7-2.7-2.8-4.4-32.2l-1.7-29.5l2.7-26.5c2.5-25,2.6-27.8,1.7-49.7c-0.9-20.9-0.8-24.4,0.9-35.7c2.1-13.6,1.8-16-2.3-20.4
c-2.4-2.6-6.9-5.2-8.9-5.2c-0.7,0-3.9,1.1-7.2,2.5c-9.6,3.9-21.2,12.2-38.7,27.6c-6.8,5.9-9.6,7.8-12.7,8.3
c-5.2,0.8-9.7,5.2-13.2,13l-2.7,5.9l-1.9-2.9c-1.7-2.5-1.9-4.9-1.9-18.4c-0.1-8.5-0.2-16.2-0.3-17.1c-0.3-2.3-7.1-8.8-11.6-11.1
c-5.2-2.7-10.7-2-19.3,2.2c-4.9,2.5-12.5,7.6-20.2,13.7c0.4,1.8,0.7,3.5,0.9,5.3c1.8,16.4,7.8,29.5,11.1,44.5
c0.5-1.9,2.2-4.1,4.9-6.7c5.6-5.3,6.9-5.7,9.5-2.8c1.3,1.4,1.9,3.5,2.2,8.6c1.1,0,1.9,0.4,2.3,1.4c11,29,2,63-2,95
c-0.1,0.5-0.1,0.9-0.3,1.4c-0.7,16.1-2.7,24.7-8.6,35.4l-3,5.3l2.1,6.7c2.8,9.2,6.1,15.5,9.8,18.6c2.6,2.1,4.2,2.6,8.8,2.6h5.7
l12.7-12.8l12.7-12.7l13-26.8l11.6-23.8c-1-15-0.8-30,3.5-44.9c0.1,0,0.1,0,0.2,0c0.1-0.4,0.2-0.8,0.4-1.3
c-9.6-16.7,0.8-38.5,9.4-54.7c1,0,3-2,5,0c6.7,18.1-3,37.2-1.3,56.3c0.1,0.3,0.2,0.6,0.2,0.9c1.7,1,2.8,2.8,3.1,5.8
c2.5,14.9,2.2,30.4-1.3,45c0.9,2.6,1.3,5.7,1.3,9.6c0,6.9,0,7-5,12.9c-2.7,3.3-5,6.5-5,7.3c0,3.6,5.6,19.1,8.1,22.7
c5,6.8,14,15.4,18.6,17.6c6.2,3,13.5,3.3,32.3,1.5c35.7-3.5,63.8-8.7,79.3-14.6c7.8-2.9,13.7-8.6,13.7-13
C391,344.7,378.3,333.5,362,332.3z M204.7,257.2c-0.5,30.5-1.1,36.1-5.9,50.3c-2.5,7.7-8.1,18.9-12,24c-3,4-3,4-2.4,1
c0.3-1.7,2.6-14.7,5-29c4.1-23.8,4.4-27.2,4.1-40c-0.2-7.7-0.8-17.2-1.4-21c-1.3-8.9-1.4-17.6-0.1-20.9c1.1-3,3.7-3.3,7.9-1.1
C205,223.1,205.2,225.2,204.7,257.2z"
            />
          </clipPath>
          <clipPath id="peng-1">
            <path
              d="M135.1,167.7c-4.8,3.7-9.6,7.8-13.8,11.8c-6.7,6.2-8.3,8.2-8.3,10.6c0,1.6,2.5,16.7,5.5,33.7l5.4,30.7l-1.5,12
c-3.5,27.2-11.2,60.2-18,77.5c-9.9,24.8-22.4,42.7-39.2,55.9c-8,6.3-8.2,6.6-8.2,10.8c0,4.8,1.4,6.6,7.9,10.8
c5.2,3.2,6.9,3.2,12.2-0.6c11.6-8.3,26.4-27.1,37.5-47.4c10.8-19.8,25.4-53.8,25.4-59.1c0-1.5,0.5-3.4,1.3-5.3
c-3.6-27.4,7.8-59.2,5.7-87.8c-0.7,0-1.4-0.1-2.1-0.3c0.7,0.2,1.4,0.2,2.1,0.3c0-0.4,0-0.8-0.1-1.3c0,0.4,0.1,0.8,0.1,1.3
c0.2,0,0.4,0,0.5,0c-0.7-1.2-0.9-2.4-0.5-3.7c-3.3-15.1-9.3-28.1-11.1-44.5C135.7,171.2,135.4,169.5,135.1,167.7z"
            />
          </clipPath>
        </defs>
        <path
          id="line-peng-1"
          className="st0"
          d="M117.2,166.3c8.5,8.6,7.5,22.5,9.7,34.4c0.9,5.2,2.6,10.2,3.6,15.4c1.5,7.2,1.8,14.6,1.9,21.9
c0.4,44.5-10,89.1-30,128.9c-0.9,1.8-1.9,3.7-3.1,5.3c-1.3,1.7-3,3.1-4.5,4.7c-6.9,7.5-9.3,18.4-16.4,25.6c-3.5,3.5-8,6-11.6,9.4
c-2.2,2.1-4,4.5-5.5,7.1"
        />
        <path
          id="line-peng-2"
          className="st0"
          d="M108.2,205.1c25.8-2.4,49.5-19.9,59.5-43.8c7.6,29.8-2.9,61.6,2.5,91.9
c1.7,9.5,4.9,18.7,5.8,28.3c0.7,6.9,0.1,13.9-0.4,20.8c-1.3,17.3-2.7,34.6-4,51.9c-0.8,10.1-1.9,20.9-8.5,28.6
c6.6-0.3,11.5-6.1,15.5-11.5c4.3-5.8,8.7-11.6,11.9-18.1c2.6-5.2,4.4-10.8,7.5-15.8c2.6-4.2,5.9-7.8,8.6-11.9c6-9.4,8-20.7,9.9-31.7
c4.6-26.6,9.1-53.9,3.8-80.4c-9.9-2.1-20.4-0.9-29.5,3.6c4-4.7,8.7-8.7,13.9-12c7.5-4.8,16-8,23.7-12.7
c16.2-9.9,27.7-25.8,38.7-41.3c0.2,10.4,0.3,20.8,0.5,31.2c0.1,7.5,0.2,15.1-1.1,22.5c-1.3,7.5-4.1,14.6-5.9,22
c-4.1,16.9-3.1,34.6-2,51.9c0.6,10.4,1.3,20.8,1.9,31.2c0.9,15.1,2,30.8,9.7,43.8c2.2,3.7,5.3,7.4,9.6,8.3c2.7,0.6,5.5-0.1,8.3-0.7
c32.3-7.4,65.3-11.8,98.4-13.3"
        />
        <path
          id="line-peng-3"
          className="st0"
          d="M111.4,237.4c16.3,0.9,32.3,6.8,45.2,16.8c1.1,0.9,2.2,1.8,3.1,2.9c0.7,0.9,1.2,1.9,1.7,2.9
c1.4,2.6,2.7,5.2,4.1,7.8"
        />
        <path
          id="line-peng-4"
          className="st0"
          d="M218.1,224.9c2.3-0.3,4.7-0.7,7-1c2.5-0.3,5-0.7,7.5-0.3c8.3,1.2,13.7,9.7,21.8,11.8"
        />
        <path
          id="line-peng-5"
          className="st0"
          d="M216.2,276.9c5.4,0,10.8,1,15.9,3c6,2.4,11.3,6,16.4,9.9"
        />
        <path
          id="line-peng-6"
          className="st0"
          d="M304.7,93.7c6.6,3.8,12.9,8.1,19,12.7c3,2.3,6,4.8,8,8c4.3,6.8,3.3,15.8-0.1,23.1
c-3.4,7.3-9,13.3-14.1,19.5c-5.1,6.2-9.8,13.1-11.1,21c20.2-3.9,39.1-13.7,54-27.9c3.3-3.1,7.1-6.7,11.6-6c3.5,0.5,6.1,3.6,7.1,7
c1,3.4,0.6,7,0,10.5c-3.4,22.9-11.9,45.2-11.8,68.4c0,6.8,0.5,14.3-3.8,19.5"
        />
        <path
          id="line-peng-7"
          className="st0"
          d="M315.5,186c2.3,0.2,4.5,0.8,6.6,1.7c5,2.2,9,6.1,12.9,9.9c2.3,2.3,4.7,4.6,7,6.9
c3.3,3.2,6.5,6.5,9.2,10.3c2.3,3.3,4,7,5.2,10.9"
        />
        <path
          id="line-peng-8"
          className="st0"
          d="M303.6,215.5c3.8,11.7,7.6,23.5,11.5,35.2c2.7,8.4,5.5,16.8,5.7,25.6c0.4,15-6.9,30-19,38.8
          c8.9,1.9,18.2-0.8,26.4-4.9c8.2-4,15.7-9.4,24-13.2c6.9-3.2,14.3-5.2,21.5-7.8c14.6-5.2,28.5-12.4,41.2-21.3c4.7-3.3,10-7.1,15.6-6
          c4.5,0.8,8,4.6,9.5,8.8c1.6,4.2,1.6,8.9,1.2,13.4c-0.5,6.9-1.8,13.6-3,20.4c-2.1,11.6-4.3,23.3-6.4,34.9c-1.1,6.1-2.2,12.2-3.3,18.3
          c-0.8,4.4-1.6,8.8-2.8,13.1c-1.1,3.8-2.4,7.4-3.6,11.1c-2.5,7.7-4.5,15.7-8.1,23s-9.1,14.1-16.6,17.2c-4.5,1.9-9.5,2.3-14.5,2.3
          c-26.6,0.2-52.1-10.1-76.5-20.6c-5.3-2.3-10.7-4.6-15.3-8.1"
        />
      </svg>
    </div>
  );
}
