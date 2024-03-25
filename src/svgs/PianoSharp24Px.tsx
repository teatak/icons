import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPianoSharp24Px = (
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
    <path d="M21 3H3v18h18zm-8 11.5h1.25V19h-4.5v-4.5H11V5h2zM5 5h2v9.5h1.25V19H5zm14 14h-3.25v-4.5H17V5h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPianoSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
