import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSendOutlined24Px = (
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
    <path d="m4.01 6.03 7.51 3.22-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3 2 10l15 2-15 2 .01 7L23 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSendOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
