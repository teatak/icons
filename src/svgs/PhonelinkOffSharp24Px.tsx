import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhonelinkOffSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="m4.56 4-2.5-2.49zM24 8h-8v4.61l2 2V10h4v7h-1.61l3 3H24zm-2-2V4H7.39l2 2zM2.06 1.51.65 2.92 2 4.27V17H0v3h17.73l2.35 2.35 1.41-1.41zM4 17V6.27L14.73 17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhonelinkOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
