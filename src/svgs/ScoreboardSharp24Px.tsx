import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScoreboardSharp24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17.5 13.5H16v-3h1.5zM22 4h-5V2h-2v2H9V2H7v2H2v16h20zM9.5 12.5h-3v1h3V15H5v-3.5h3v-1H5V9h4.5zm3.25 5.5h-1.5v-1.5h1.5zm0-3.5h-1.5V13h1.5zm0-3.5h-1.5V9.5h1.5zm0-3.5h-1.5V6h1.5zM19 9v6h-4.5V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgScoreboardSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
