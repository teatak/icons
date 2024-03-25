import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClearAllSharp24Px = (
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
    <path d="M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClearAllSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
