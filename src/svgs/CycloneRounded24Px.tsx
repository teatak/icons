import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCycloneRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    <path d="M22 6.11c0-.46-.3-.86-.74-.97C19.23 4.6 16.03 4 12 4c-2.15 0-4.11.86-5.54 2.24.1-.65.28-1.69.62-2.96.17-.64-.3-1.28-.97-1.28-.45 0-.85.3-.97.74C4.6 4.77 4 7.97 4 12c0 2.15.86 4.11 2.24 5.54-.65-.1-1.69-.28-2.96-.62-.64-.17-1.28.3-1.28.97 0 .46.3.86.74.97C4.77 19.4 7.97 20 12 20c2.15 0 4.11-.86 5.54-2.24-.1.65-.28 1.69-.62 2.96-.17.64.3 1.28.97 1.28.46 0 .86-.3.97-.74C19.4 19.23 20 16.03 20 12c0-2.15-.86-4.11-2.24-5.54.65.1 1.69.28 2.96.62.64.17 1.28-.3 1.28-.97M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgCycloneRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
