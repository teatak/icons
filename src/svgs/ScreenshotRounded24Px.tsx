import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScreenshotRounded24Px = (
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
    <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zM9.5 8.5h1.75c.41 0 .75-.34.75-.75S11.66 7 11.25 7h-2.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75s.75-.34.75-.75zm3.25 8.5h2.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75" />
  </svg>
);
const ForwardRef = forwardRef(SvgScreenshotRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
