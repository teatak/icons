import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRailwayAlertRounded24Px = (
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
    <path d="M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20l-1.21.81A.649.649 0 0 0 4.65 22h10.7c.36 0 .65-.29.65-.65 0-.22-.11-.42-.29-.54L14.5 20c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-.76-4.89-2zm6 6c-.83 0-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5S10.83 17 10 17" />
    <path d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m.5-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRailwayAlertRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
