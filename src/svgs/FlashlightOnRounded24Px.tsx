import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlashlightOnRounded24Px = (
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
    <path d="M6 4v1h12V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2M6 7v1l2 3v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-9l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashlightOnRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
