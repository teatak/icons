import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddAPhotoTwoTone24Px = (
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
    <path
      d="M6 7v3H5v10h16V8h-4.05l-1.83-2H9v1zm7 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5"
      opacity={0.3}
    />
    <path d="M21 6h-3.17L16 4H9v2h6.12l1.83 2H21v12H5V10H3v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5m5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M5 9V6h3V4H5V1H3v3H0v2h3v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddAPhotoTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
