import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCropRotateRounded24Px = (
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
    <path d="M16 9v5h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1m3 7H9c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v8c0 1.1.9 2 2 2h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1M17.66 1.4A11.8 11.8 0 0 0 11.39.04l3.81 3.81 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74M7.47 21.49a10.5 10.5 0 0 1-5.89-7.86.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.67.89 3.83 1.51 6.27 1.36L8.8 20.16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCropRotateRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
