import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSyncDisabledSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16M20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6 6 0 0 1 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.9 7.9 0 0 0 20 12M4.27 4 2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6 6 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSyncDisabledSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
