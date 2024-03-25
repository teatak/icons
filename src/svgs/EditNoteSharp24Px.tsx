import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEditNoteSharp24Px = (
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
    <path d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13 1.41-1.41 2.12 2.12-1.41 1.41zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditNoteSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
