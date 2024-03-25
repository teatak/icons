import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarehouseTwoTone24Px = (
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
    <path d="M20 8.35V19h-2v-8H6v8H4V8.35l8-3.2zM22 21V7L12 3 2 7v14h6v-8h8v8zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWarehouseTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
