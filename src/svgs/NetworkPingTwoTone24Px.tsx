import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNetworkPingTwoTone24Px = (
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
    <path d="M12 14.67 3.41 6.09 2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6 2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNetworkPingTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
