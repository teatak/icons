import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoundedCornerOutlined24Px = (
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
    <path d="M19 19h2v2h-2zm0-2h2v-2h-2zM3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm0-4h2V3H3zm4 0h2V3H7zm8 16h2v-2h-2zm-4 0h2v-2h-2zm4 0h2v-2h-2zm-8 0h2v-2H7zm-4 0h2v-2H3zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRoundedCornerOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
