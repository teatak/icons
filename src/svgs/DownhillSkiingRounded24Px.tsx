import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownhillSkiingRounded24Px = (
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
    <path d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2.72 16.4.76.27c.62.21 1.27.33 1.96.33a6 6 0 0 0 1.95-.33c.27-.09.57-.02.78.18a.75.75 0 0 1-.3 1.24c-.76.27-1.58.41-2.43.41-.86 0-1.68-.14-2.45-.41L2.7 17.72a.74.74 0 0 1-.45-.95c.14-.39.57-.6.96-.45l6.19 2.25 1.72-4.44-3.57-3.73A2 2 0 0 1 8 7.28l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.02 5.02 0 0 0 2.83 3.14l.29-.89c.13-.39.55-.61.94-.48.4.13.61.55.48.95l-.6 1.85c-.17.52-.72.82-1.24.65A7.03 7.03 0 0 1 13 8.58l-2.53 1.45 2.23 2.55c.49.56.63 1.34.36 2.04l-1.78 4.63 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownhillSkiingRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
