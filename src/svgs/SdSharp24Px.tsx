import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSdSharp24Px = (
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
    <path d="M2 4v16h20V4zm11 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-3.5 4.5v-1H6V9h5v2H9.5v-.5h-2v1H11V15H6v-2h1.5v.5zm5 0h2v-3h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSdSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
