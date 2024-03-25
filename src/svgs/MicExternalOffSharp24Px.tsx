import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicExternalOffSharp24Px = (
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
    <path d="M10 5c0-1.66-1.34-3-3-3-.62 0-1.19.19-1.67.5l4.15 4.15C9.8 6.18 10 5.61 10 5M14 4h4v11.17l2 2V2h-8v7.17l2 2zM2.1 2.1.69 3.51 5.17 8H4l1 10h1v4h8v-5.17l6.49 6.49 1.41-1.41zM12 20H8v-2h1l.56-5.61L12 14.83z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMicExternalOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
