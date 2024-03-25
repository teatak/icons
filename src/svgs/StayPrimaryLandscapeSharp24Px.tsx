import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStayPrimaryLandscapeSharp24Px = (
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
    <path d="M1 19h22V5H1zM19 7v10H5V7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStayPrimaryLandscapeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
