import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgConnectedTvRounded24Px = (
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
    <path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86a5 5 0 0 0-4.06-4.06.746.746 0 0 0-.87.74c0 .37.26.67.62.73m.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85a8 8 0 0 0-7.11-7.1.756.756 0 0 0-.85.74c0 .37.27.71.64.74" />
  </svg>
);
const ForwardRef = forwardRef(SvgConnectedTvRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
