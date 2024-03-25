import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextRotateVerticalSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L15 6.98 16.87 12zM6 20l3-3H7V4H5v13H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTextRotateVerticalSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
