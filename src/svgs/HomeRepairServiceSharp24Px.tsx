import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHomeRepairServiceSharp24Px = (
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
    <path d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zM17 8V4H7v4H2v6h4v-2h2v2h8v-2h2v2h4V8zM9 6h6v2H9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeRepairServiceSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
