import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningAmber24Px = (
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
    <path d="M12 5.99 19.53 19H4.47zM12 2 1 21h22z" />
    <path d="M13 16h-2v2h2zM13 10h-2v5h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningAmber24Px);
const Memo = memo(ForwardRef);
export default Memo;
