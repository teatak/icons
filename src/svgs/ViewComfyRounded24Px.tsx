import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewComfyRounded24Px = (
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
    <path d="M2 5v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1m9 15h10c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H11c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1m-8 0h4c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewComfyRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
