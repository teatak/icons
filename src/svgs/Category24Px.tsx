import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCategory24Px = (
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
    <path d="m12 2-5.5 9h11z" />
    <circle cx={17.5} cy={17.5} r={4.5} />
    <path d="M3 13.5h8v8H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory24Px);
const Memo = memo(ForwardRef);
export default Memo;
