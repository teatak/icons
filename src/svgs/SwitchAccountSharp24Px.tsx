import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwitchAccountSharp24Px = (
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
    <path d="M4 6H2v16h16v-2H4zm2-4v16h16V2zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwitchAccountSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
