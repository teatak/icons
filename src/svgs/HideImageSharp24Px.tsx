import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHideImageSharp24Px = (
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
    <path d="M21 3H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHideImageSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
