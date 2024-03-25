import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPanoramaSharp24Px = (
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
    <path d="M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPanoramaSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
