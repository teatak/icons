import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <circle cx={12} cy={14} r={3.2} />,
  <circle cx={12} cy={14} r={5} fill="none" />,
  <path d="M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6zM16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33z" />,
  <path fill="none" d="M24 0H0v24h24z" />,
  <path d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
);
