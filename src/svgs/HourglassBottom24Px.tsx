import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassBottom24Px = (
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
    <path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22zM8 7.5V4h8v3.5l-4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHourglassBottom24Px);
const Memo = memo(ForwardRef);
export default Memo;
