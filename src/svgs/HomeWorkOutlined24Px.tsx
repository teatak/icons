import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHomeWorkOutlined24Px = (
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
    <path d="M1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-6.97l5-3.57 5 3.57zM17 7h2v2h-2zM17 11h2v2h-2zM17 15h2v2h-2z" />
    <path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeWorkOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
