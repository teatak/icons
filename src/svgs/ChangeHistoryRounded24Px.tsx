import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChangeHistoryRounded24Px = (
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
    <path d="M12 7.77 18.39 18H5.61zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgChangeHistoryRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
