import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBorderTopOutlined24Px = (
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
    <path d="M7 21h2v-2H7zm0-8h2v-2H7zm4 0h2v-2h-2zm0 8h2v-2h-2zm-8-4h2v-2H3zm0 4h2v-2H3zm0-8h2v-2H3zm0-4h2V7H3zm8 8h2v-2h-2zm8-8h2V7h-2zm0 4h2v-2h-2zM3 3v2h18V3zm16 14h2v-2h-2zm-4 4h2v-2h-2zM11 9h2V7h-2zm8 12h2v-2h-2zm-4-8h2v-2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBorderTopOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
