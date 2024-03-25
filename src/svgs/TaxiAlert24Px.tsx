import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTaxiAlert24Px = (
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
    <path d="M23 8A7 7 0 0 0 9.68 5H7v2H4.5a1.5 1.5 0 0 0-1.42 1.01L1 14v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.68A7.01 7.01 0 0 0 23 8m-18.5.5h4.53a6.93 6.93 0 0 0 2.08 4.5H3zm0 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m2.93-5.63-.21.11-.18.09a5 5 0 0 1-.42.16l-.22.07-.23.06-.2.05a5 5 0 0 1-5.94-4.41A4 4 0 0 1 11 8l.02-.47.02-.17.04-.28.04-.21.05-.21.07-.24.05-.13a4.99 4.99 0 0 1 9.69 1.7 4.96 4.96 0 0 1-2.55 4.38M15 4h2v5h-2zm0 6h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTaxiAlert24Px);
const Memo = memo(ForwardRef);
export default Memo;
