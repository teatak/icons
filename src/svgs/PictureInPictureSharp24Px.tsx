import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPictureInPictureSharp24Px = (
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
    <path d="M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPictureInPictureSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
