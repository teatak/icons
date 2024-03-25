import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLiquorSharp24Px = (
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
    <path d="M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3zm2-6h2v3H5zM22 9l-3-1.01V2h-5v6l-3 1.01V22h11zm-6-5h1v1h-1zm-3 6.44 3-.98V7h1v2.46l3 .98V12h-7zM20 20h-7v-2h7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLiquorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
