import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFortTwoTone24Px = (
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
      d="M19 8.17 20.17 7h-4.34L17 8.17V12H7V8.17L8.17 7H3.83L5 8.17v7.66l-2 2V19h5v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h5v-1.17l-2-2z"
      opacity={0.3}
    />
    <path d="M23 7V3h-2v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9v-4l-2-2V9zm-2 12h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-1.17l2-2V8.17L3.83 7h4.34L7 8.17V12h10V8.17L15.83 7h4.34L19 8.17v7.66l2 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFortTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
