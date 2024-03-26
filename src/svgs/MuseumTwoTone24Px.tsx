import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path
    d="M6 20h12V9H6zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8z"
    opacity={0.3}
  />,
  <path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z" />,
  <path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z" />
);
