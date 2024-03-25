import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClearAllTwoTone24Px = (
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
    <path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClearAllTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
