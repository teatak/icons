import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHexagonRounded24Px = (
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
    <path d="M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgHexagonRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
