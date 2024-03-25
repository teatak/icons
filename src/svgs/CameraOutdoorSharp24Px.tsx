import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraOutdoorSharp24Px = (
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
    <path d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCameraOutdoorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
