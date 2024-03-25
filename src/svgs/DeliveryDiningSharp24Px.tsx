import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeliveryDiningSharp24Px = (
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
    <path d="M19 10.35V5h-5v2h3v2.65L13.52 14H10V9H2v7h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1" />
    <path d="M5 6h5v2H5zM19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgDeliveryDiningSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
