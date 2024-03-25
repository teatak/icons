import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwitchLeftTwoTone24Px = (
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
    <path d="M8.5 8.62v6.76L5.12 12z" opacity={0.3} />
    <path d="M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwitchLeftTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
