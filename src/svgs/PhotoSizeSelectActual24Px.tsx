import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhotoSizeSelectActual24Px = (
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
    <path fill="none" d="M24 24H0V0h24z" />
    <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhotoSizeSelectActual24Px);
const Memo = memo(ForwardRef);
export default Memo;
