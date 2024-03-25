import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoCameraBackSharp24Px = (
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
    <path d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM5 16l2.38-3.17L9 15l2.62-3.5L15 16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVideoCameraBackSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
