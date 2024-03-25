import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpaceDashboard24Px = (
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
    <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6zm2 0h6c1.1 0 2-.9 2-2v-7h-8zm8-11V5c0-1.1-.9-2-2-2h-6v7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpaceDashboard24Px);
const Memo = memo(ForwardRef);
export default Memo;
