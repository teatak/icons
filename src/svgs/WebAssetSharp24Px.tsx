import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebAssetSharp24Px = (
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
    <path d="M3 4v16h18V4zm16 14H5V8h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebAssetSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
