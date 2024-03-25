import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandshakeSharp24Px = (
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
    <path d="m10.59 5.95-7.05 7.04L.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42zm12.65 4.29-8.49-8.49-2.06 2.06 5.9 5.88-2.83 2.83-5.17-5.17-6.27 6.27 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.41 1.41 5.32-5.32.71.71L10.68 20l1.41 1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHandshakeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
