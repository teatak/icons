import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFemaleRounded24Px = (
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
    <path d="M12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m1 8.91a5.5 5.5 0 0 0 4.5-5.41C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5a5.5 5.5 0 0 0 4.5 5.41V17h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFemaleRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
