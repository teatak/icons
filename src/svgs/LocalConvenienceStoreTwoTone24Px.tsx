import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalConvenienceStoreTwoTone24Px = (
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
    <path
      d="M14 14h2v4h4V9h-3V6H7v3H4v9h4v-4zm-1-7h1v2h1V7h1v5h-1v-2h-2zM8 9h2V8H8V7h3v3H9v1h2v1H8z"
      opacity={0.3}
    />
    <path d="M10 16h4v4h8V7h-3V4H5v3H2v13h8zm-2 0v2H4V9h3V6h10v3h3v9h-4v-4H8zm3-5H9v-1h2V7H8v1h2v1H8v3h3zm4 1h1V7h-1v2h-1V7h-1v3h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalConvenienceStoreTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
