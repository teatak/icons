import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassBottomTwoTone24Px = (
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
    <path d="m16 16.5-4-4-4 4V20h8z" opacity={0.3} />
    <path d="m16 16.5-4-4-4 4V20h8z" opacity={0.3} />
    <path d="M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99zM8 7.5V4h8v3.5l-4 4zm0 9 4-4 4 4V20H8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHourglassBottomTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
