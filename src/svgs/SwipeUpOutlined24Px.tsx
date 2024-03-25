import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwipeUpOutlined24Px = (
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
    <path d="m20.22 10-4.15.01a1 1 0 0 0-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01zM2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94a10.457 10.457 0 0 0 1.88 8.99L6.13 14A11.97 11.97 0 0 1 3.5 6.5c0-.92.1-1.82.3-2.68z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeUpOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
