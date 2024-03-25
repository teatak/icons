import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextRotationDown24Px = (
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
    <path d="M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1zm-7-2.62 5.02 1.87L14 13.12zM6 19.75l3-3H7V4.25H5v12.5H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTextRotationDown24Px);
const Memo = memo(ForwardRef);
export default Memo;
