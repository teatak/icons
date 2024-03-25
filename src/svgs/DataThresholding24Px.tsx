import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDataThresholding24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.33 5.17 2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41zM5 16h1.72L5 17.72zm.84 3 3-3h1.83l-3 3zm3.96 0 3-3h1.62l-3 3zm3.73 0 3-3h1.62l-3 3zM19 19h-1.73L19 17.27z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDataThresholding24Px);
const Memo = memo(ForwardRef);
export default Memo;
