import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStormTwoTone24Px = (
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
    <circle cx={12} cy={12} r={2} opacity={0.3} />
    <path
      d="M17.2 9C15.54 6.13 11.86 5.15 9 6.8c-2.67 1.54-3.7 4.84-2.5 7.6q.135.3.3.6a6.01 6.01 0 0 0 8.2 2.2c2.67-1.54 3.7-4.84 2.5-7.6q-.135-.3-.3-.6M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4"
      opacity={0.3}
    />
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    <path d="M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16a7.96 7.96 0 0 0 4.86 3.72c1.98.53 4.16.31 6.07-.79 1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2A6.01 6.01 0 0 1 6.8 15q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6" />
  </svg>
);
const ForwardRef = forwardRef(SvgStormTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
