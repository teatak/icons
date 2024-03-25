import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHail24Px = (
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
    <path d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m5-4h2v.4c-.1 2.2-.8 3.9-2.3 5.1-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1q-.45.15-.6.3c-.9.7-1.39 1.6-1.4 3.1v.5H5v-.5c0-2 .71-3.59 2.11-4.79C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C16.48 5.14 17 4 17 2.5zM4 16h3v6H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHail24Px);
const Memo = memo(ForwardRef);
export default Memo;
