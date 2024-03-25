import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSanitizerTwoTone24Px = (
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
    <path
      d="M10 8c-2.21 0-4 1.79-4 4v8h8v-8c0-2.21-1.79-4-4-4m3 8h-2v2H9v-2H7v-2h2v-2h2v2h2z"
      opacity={0.3}
    />
    <path d="M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5a2.5 2.5 0 0 0 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSanitizerTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
