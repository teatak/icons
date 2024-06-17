import * as React from "react";
import { createSvg } from "../Svg";
export default createSvg(
  <path fill="none" d="M0 0h24v24H0z" />,
  <path d="M9 7h6v10H9z" opacity={0.3} />,
  <path d="M15 7v10H9V7zm6-2h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z" />
);
