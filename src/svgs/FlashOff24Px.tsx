import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlashOff24Px = (
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
    <path d="M3.27 3 2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73zM17 10h-4l4-8H7v2.18l8.46 8.46z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
