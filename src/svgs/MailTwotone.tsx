import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" opacity={0.3} />,
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2-8 4.99L4 6zm0 12H4V8l8 5 8-5z" />
);
