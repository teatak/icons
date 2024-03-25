import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRocketTwoTone24Px = (
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
      d="M7.98 18.25c-.29-.9-.57-1.94-.76-3L6 16.07v2.98zM12 4.36S9 6.38 9 13c0 2.25 1 5 1 5h4s1-2.75 1-5c0-6.62-3-8.64-3-8.64M12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 6.05v-2.98l-1.22-.81c-.19 1.05-.47 2.1-.76 3z"
      opacity={0.3}
    />
    <path d="M14 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-6.02 7.25c-.29-.9-.57-1.94-.76-3L6 16.07v2.98zM12 2s5 2 5 11l2.11 1.41c.56.37.89 1 .89 1.66V22l-5-2H9l-5 2v-5.93c0-.67.33-1.29.89-1.66L7 13c0-9 5-11 5-11m0 2.36S9 6.38 9 13c0 2.25 1 5 1 5h4s1-2.75 1-5c0-6.62-3-8.64-3-8.64m6 14.69v-2.98l-1.22-.81c-.19 1.05-.47 2.1-.76 3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRocketTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
