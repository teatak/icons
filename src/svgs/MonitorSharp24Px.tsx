import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMonitorSharp24Px = (
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
    <path d="M22 3H2v15h5l-1 1v2h12v-2l-1-1h5zm-2 13H4V5h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMonitorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
