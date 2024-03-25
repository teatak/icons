import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoAccountsTwoTone24Px = (
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
    <path d="M12 6c-.52 0-1 .12-1.44.32l4.62 4.62c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6m0-4C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 0 0 2.99 2.99l2.2 2.2Q12.885 15 12 15c-2.32 0-4.45.8-6.14 2.12A7.96 7.96 0 0 1 4 12m8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9" />
    <path
      d="M7.35 18.5c1.31.94 2.91 1.5 4.65 1.5s3.34-.56 4.65-1.5C15.34 17.56 13.74 17 12 17s-3.34.56-4.65 1.5m7.83-7.56-4.62-4.62C11 6.12 11.48 6 12 6c1.93 0 3.5 1.57 3.5 3.5 0 .52-.12 1-.32 1.44"
      opacity={0.3}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNoAccountsTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
