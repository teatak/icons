import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <g fill="none">
    <path d="M0 0h24v24H0z" />
    <path d="M0 0h24v24H0z" />
  </g>,
  <circle cx={9} cy={8} r={4} />,
  <path d="M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4M20 10V7h-2v3h-3v2h3v3h2v-3h3v-2z" />
);
