import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifi1BarOutlined24Px = (
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
    <path d="M15.53 17.46 12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46" />
  </svg>
);
const ForwardRef = forwardRef(SvgWifi1BarOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
