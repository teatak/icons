import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDynamicFormSharp24Px = (
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
    <path d="M17 20v-9h-2V4h7l-2 5h2zm-2-7v7H2v-7zm-8.75 2.75h-1.5v1.5h1.5zM13 4v7H2V4zM6.25 6.75h-1.5v1.5h1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDynamicFormSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
