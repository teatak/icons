import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDangerous24Px = (
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
    <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDangerous24Px);
const Memo = memo(ForwardRef);
export default Memo;
