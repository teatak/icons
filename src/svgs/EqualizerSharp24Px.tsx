import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEqualizerSharp24Px = (
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
    <path d="M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEqualizerSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
