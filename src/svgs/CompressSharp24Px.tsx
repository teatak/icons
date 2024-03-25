import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCompressSharp24Px = (
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
    <path d="M4 9h16v2H4zM16 4h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zM4 12h16v2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCompressSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
