import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMilitaryTechTwoTone24Px = (
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
    <path d="m13 11.07 2-1.2V4h-2zM9 4v5.87l2 1.2V4z" opacity={0.3} />
    <path d="M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86m-6 .64-2-1.2V4h2zm4-1.2-2 1.2V4h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMilitaryTechTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
