import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMouseOutlined24Px = (
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
    <path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84m-7-5.84V9H6a6.005 6.005 0 0 1 5-5.84M18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMouseOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
