import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFiberPinTwoTone24Px = (
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
    <path d="M5 14.62h1.31v-1.75h1.75c.74 0 1.31-.57 1.31-1.31v-.88c0-.74-.57-1.31-1.31-1.31H5zm1.31-3.93h1.75v.88H6.31zm5.03-1.31h1.31v5.25h-1.31zm3.28 5.24h1.1v-3.06l2.23 3.06H19V9.38h-1.09v3.06l-2.19-3.06h-1.1z" />
    <path d="M4 6h16v12H4z" opacity={0.3} />
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4V6h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFiberPinTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
