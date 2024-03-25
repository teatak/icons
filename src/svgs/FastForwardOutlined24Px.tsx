import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastForwardOutlined24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M15 9.86 18.03 12 15 14.14zm-9 0L9.03 12 6 14.14zM13 6v12l8.5-6zM4 6v12l8.5-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFastForwardOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
