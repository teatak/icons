import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignVerticalBottomTwoTone24Px = (
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
    <path d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAlignVerticalBottomTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
