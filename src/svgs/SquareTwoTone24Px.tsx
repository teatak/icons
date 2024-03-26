import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path d="M5 5h14v14H5z" opacity={0.3} />,
  <path d="M3 3v18h18V3zm16 16H5V5h14z" />
);
