import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path
    d="M5 19h14V5H5zm8-12h4v4h-4zm0 6h4v4h-4zM7 7h4v4H7zm0 6h4v4H7z"
    opacity={0.3}
  />,
  <path d="M7 13h4v4H7zM13 13h4v4h-4z" />,
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />,
  <path d="M7 7h4v4H7zM13 7h4v4h-4z" />
);
