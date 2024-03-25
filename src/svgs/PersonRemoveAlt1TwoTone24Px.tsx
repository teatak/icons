import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonRemoveAlt1TwoTone24Px = (
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
    <path d="M10 16c2.69 0 5.77 1.28 6 2H4c.2-.71 3.3-2 6-2" opacity={0.3} />
    <circle cx={10} cy={8} r={2} opacity={0.3} />
    <path d="M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2zM17 10h6v2h-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPersonRemoveAlt1TwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
