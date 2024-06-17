import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path
    d="M4 18h16V6H4zm8.5-10.5h4v4h-4zm0 5h4v4h-4zm-5-5h4v4h-4zm0 5h4v4h-4z"
    opacity={0.3}
  />,
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z" />,
  <path d="M7.5 7.5h4v4h-4zM12.5 7.5h4v4h-4zM7.5 12.5h4v4h-4zM12.5 12.5h4v4h-4z" />
);
