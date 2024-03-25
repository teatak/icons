import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMan3Sharp24Px = (
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
    <path d="M16 7H8v8h2v7h4v-7h2zM12 1.751 14.248 4 12 6.248 9.75 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMan3Sharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
