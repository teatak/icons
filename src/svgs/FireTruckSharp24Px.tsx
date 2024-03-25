import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFireTruckSharp24Px = (
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
    <path d="m23 11-2-6h-2V3h-3v2h-4v6H1v7h3c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-3-8V7h5.56l1.33 4z" />
    <path d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10zm-5.75 0H3.5v-2h1.75zm3.25 0H6.75v-2H8.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFireTruckSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
