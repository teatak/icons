import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMovingOutlined24Px = (
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
    <path d="M20 9.42V12h2V6h-6v2h2.58l-4.46 4.46a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59 3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMovingOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
