import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrokenImageSharp24Px = (
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
    <path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3zm-3 8.42 3 3.01V21H3v-8.58l3 2.99 4-4 4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBrokenImageSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
