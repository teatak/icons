import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignVerticalTopTwoTone24Px = (
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
    <path d="M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAlignVerticalTopTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
