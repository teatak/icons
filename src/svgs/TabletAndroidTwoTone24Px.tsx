import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTabletAndroidTwoTone24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M4.75 3h14.5v16H4.75z" opacity={0.3} />
    <path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3m-4 22h-4v-1h4zm5.25-3H4.75V3h14.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTabletAndroidTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
