import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewTimelineTwoTone24Px = (
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
      d="M5 19h14V5H5zm7-12h6v2h-6zm-3 4h6v2H9zm-3 4h6v2H6z"
      opacity={0.3}
    />
    <path d="M6 15h6v2H6zM12 7h6v2h-6zM9 11h6v2H9z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewTimelineTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
