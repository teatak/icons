import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEventRepeatSharp24Px = (
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
    <path d="M21 12V4h-3V2h-2v2H8V2H6v2H3v18h9v-2H5V10h14v2zm-5.36 8a3.504 3.504 0 0 0 6.86-1c0-1.93-1.57-3.5-3.5-3.5-.95 0-1.82.38-2.45 1H18V18h-4v-4h1.5v1.43c.9-.88 2.14-1.43 3.5-1.43 2.76 0 5 2.24 5 5a5.002 5.002 0 0 1-9.9 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEventRepeatSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
