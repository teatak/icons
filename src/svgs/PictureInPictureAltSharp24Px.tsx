import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPictureInPictureAltSharp24Px = (
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
    <path d="M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPictureInPictureAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
