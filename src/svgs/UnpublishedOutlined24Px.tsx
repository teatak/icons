import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUnpublishedOutlined24Px = (
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
    <path d="M7.94 5.12 6.49 3.66A9.9 9.9 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.87 7.87 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12m9.72 4.41-1.41-1.41-2.65 2.65 1.41 1.41zm2.12 13.08-2.27-2.27A9.9 9.9 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38zm-3.72-3.73L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.93 7.93 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnpublishedOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
