import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWoman2Sharp24Px = (
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
    <path d="M13.41 7h-2.82L7 16h3.5v6h3v-6H17z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgWoman2Sharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
