import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastRewindOutlined24Px = (
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
    <path d="M18 9.86v4.28L14.97 12zm-9 0v4.28L5.97 12zM20 6l-8.5 6 8.5 6zm-9 0-8.5 6 8.5 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFastRewindOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
