import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHowToRegOutlined24Px = (
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
    <path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm15.6-5.5-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHowToRegOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
