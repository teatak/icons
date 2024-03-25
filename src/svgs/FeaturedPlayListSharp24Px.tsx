import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFeaturedPlayListSharp24Px = (
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
    <path d="M23 3H1v18h22zm-11 8H3V9h9zm0-4H3V5h9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFeaturedPlayListSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
