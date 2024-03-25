import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSupportTwoTone24Px = (
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
    <path
      d="M10.3 7.32 9.13 4.54a7.98 7.98 0 0 0-4.59 4.59l2.78 1.15c.51-1.38 1.6-2.46 2.98-2.96M7.32 13.72l-2.78 1.15c.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78a4.98 4.98 0 0 1-2.98-2.96M16.67 10.27l2.78-1.15a8 8 0 0 0-4.58-4.58l-1.15 2.78c1.37.51 2.45 1.58 2.95 2.95M16.68 13.71a5 5 0 0 1-2.95 2.97l1.15 2.78c2.1-.81 3.77-2.48 4.58-4.58z"
      opacity={0.3}
    />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2.87 2.54c2.1.81 3.77 2.48 4.58 4.58l-2.78 1.15a4.98 4.98 0 0 0-2.95-2.94zm-5.74 0 1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.98 7.98 0 0 1 4.59-4.59m0 14.92a8.01 8.01 0 0 1-4.59-4.59l2.78-1.15a4.97 4.97 0 0 0 2.97 2.96zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3m5.88 7.46-1.15-2.78a4.98 4.98 0 0 0 2.95-2.97l2.78 1.17a8 8 0 0 1-4.58 4.58" />
  </svg>
);
const ForwardRef = forwardRef(SvgSupportTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
