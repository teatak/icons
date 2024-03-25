import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg3GMobiledataSharp24Px = (
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
    <path d="M3 7v2h5v2H4v2h4v2H3v2h7V7zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z" />
  </svg>
);
const ForwardRef = forwardRef(Svg3GMobiledataSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
