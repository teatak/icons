import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpaceDashboardSharp24Px = (
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
    <path d="M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpaceDashboardSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
