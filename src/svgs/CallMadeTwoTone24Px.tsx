import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCallMadeTwoTone24Px = (
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
    <path d="M5.41 20 17 8.41V15h2V5H9v2h6.59L4 18.59z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCallMadeTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
