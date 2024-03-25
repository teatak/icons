import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSimCardDownloadSharp24Px = (
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
    <path d="M20 2H10L4 8v14h16zm-8 15-4-4h3V9.02L13 9v4h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSimCardDownloadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
