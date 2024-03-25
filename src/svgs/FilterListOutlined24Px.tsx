import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterListOutlined24Px = (
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
    <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterListOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
