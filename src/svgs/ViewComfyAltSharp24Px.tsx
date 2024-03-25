import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewComfyAltSharp24Px = (
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
    <path d="M2 4v16h20V4zm9 13H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewComfyAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
