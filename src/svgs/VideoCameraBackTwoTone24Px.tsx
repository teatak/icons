import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoCameraBackTwoTone24Px = (
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
    <path d="M4 18h12V6H4zm3.38-5.17L9 15l2.62-3.5L15 16H5z" opacity={0.3} />
    <path d="M11.62 11.5 9 15l-1.62-2.17L5 16h10z" />
    <path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11zM16 18H4V6h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVideoCameraBackTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
