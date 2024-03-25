import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLeftRounded24Px = (
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
    <path fill="none" d="M24 0v24H0V0z" opacity={0.87} />
    <path d="M12.29 8.71 9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
