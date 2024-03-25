import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUpgradeSharp24Px = (
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
    <path d="M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUpgradeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
