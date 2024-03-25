import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUnarchiveSharp24Px = (
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
    <path d="M18.71 3H5.29L3 5.79V21h18V5.79zM14 15v2h-4v-2H6.5L12 9.5l5.5 5.5zM5.12 5l.81-1h12l.94 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnarchiveSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
