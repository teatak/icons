import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFireHydrantAltSharp24Px = (
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
    <path d="M21 11h-3V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H3v6h3v3H4v2h16v-2h-2v-3h3zm-9 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5" />
    <circle cx={12} cy={14} r={1.5} />
  </svg>
);
const ForwardRef = forwardRef(SvgFireHydrantAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
