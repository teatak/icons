import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarsOutlined24Px = (
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
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m7.48 7.16-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14m-5.07 6.26L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24L12 8.06l1.09 2.56 2.78.24-2.11 1.83zm-2.86-11.4-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15M4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75A7.98 7.98 0 0 1 4 12m3.84 6.82L12 16.31l4.16 2.5A7.9 7.9 0 0 1 11.99 20c-1.52 0-2.94-.44-4.15-1.18m9.25-.65-1.11-4.75 3.79-3.28c.14.59.23 1.22.23 1.86 0 2.48-1.14 4.7-2.91 6.17" />
  </svg>
);
const ForwardRef = forwardRef(SvgStarsOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
