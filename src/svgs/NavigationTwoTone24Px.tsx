import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigationTwoTone24Px = (
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
      d="m7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z"
      opacity={0.3}
    />
    <path d="m4.5 20.29.71.71L12 18l6.79 3 .71-.71L12 2zm8.31-4.12-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNavigationTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
