import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNetworkWifi1BarOutlined24Px = (
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
    <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4m3.32 10.84C14.34 14.3 13.2 14 12 14s-2.34.3-3.32.84L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNetworkWifi1BarOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
