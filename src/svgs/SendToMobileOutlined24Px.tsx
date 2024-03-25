import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSendToMobileOutlined24Px = (
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
    <path d="m18 8 4 4-4 4-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59zM7 1.01 17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99M7 21h10v-1H7zM7 4h10V3H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSendToMobileOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
