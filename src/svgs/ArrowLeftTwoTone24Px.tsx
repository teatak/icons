import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLeftTwoTone24Px = (
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
    <path d="m14 7-5 5 5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
