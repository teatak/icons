import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassDisabledOutlined24Px = (
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
    <path d="M8 4h8v3.5l-2.84 2.84 1.25 1.25L18 8.01 17.99 8H18V2H6v1.17l2 2zM2.1 2.1.69 3.51l8.9 8.9L6 16l.01.01H6V22h12v-1.17l2.49 2.49 1.41-1.41zM16 20H8v-3.5l2.84-2.84L16 18.83z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHourglassDisabledOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
