import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTabletAndroidSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTabletAndroidSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
