import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHvacSharp24Px = (
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
    <path d="M8.56 14h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1M12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1M8.56 10c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5z" />
    <path d="M3 3v18h18V3zm9 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgHvacSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
