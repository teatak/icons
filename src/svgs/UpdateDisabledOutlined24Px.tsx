import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUpdateDisabledOutlined24Px = (
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
    <path d="M20.94 13a8.9 8.9 0 0 1-1.33 3.79l-1.47-1.47c.38-.71.65-1.49.77-2.32zM8.67 5.84A7.06 7.06 0 0 1 12 5a7.01 7.01 0 0 1 5.74 3H15v2h6V4h-2v2.36C17.35 4.32 14.83 3 12 3c-1.76 0-3.4.51-4.78 1.39zM11 7v1.17l2 2V7zm8.78 15.61-3-3A8.97 8.97 0 0 1 12 21a9 9 0 0 1-9-9c0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85" />
  </svg>
);
const ForwardRef = forwardRef(SvgUpdateDisabledOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
