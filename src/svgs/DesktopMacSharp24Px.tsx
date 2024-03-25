import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDesktopMacSharp24Px = (
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
    <path d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDesktopMacSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
