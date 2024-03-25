import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBeenhereSharp24Px = (
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
    <path d="M3.01 1 3 17l9 6 8.99-6L21 1zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBeenhereSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
