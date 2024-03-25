import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastForward24Px = (
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
    <path d="m4 18 8.5-6L4 6zm9-12v12l8.5-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFastForward24Px);
const Memo = memo(ForwardRef);
export default Memo;
