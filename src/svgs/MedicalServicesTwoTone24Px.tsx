import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMedicalServicesTwoTone24Px = (
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
    <path d="M4 20h16V8H4zm4-7h3v-3h2v3h3v2h-3v3h-2v-3H8z" opacity={0.3} />
    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 4h4v2h-4zm10 16H4V8h16z" />
    <path d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMedicalServicesTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
