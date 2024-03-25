import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIosShareSharp24Px = (
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
    <path d="M20 8h-5v2h3v11H6V10h3V8H4v15h16z" />
    <path d="M11 16h2V5h3l-4-4-4 4h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIosShareSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
