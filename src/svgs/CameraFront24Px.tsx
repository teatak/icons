import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraFront24Px = (
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
    <path d="M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8m5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCameraFront24Px);
const Memo = memo(ForwardRef);
export default Memo;
