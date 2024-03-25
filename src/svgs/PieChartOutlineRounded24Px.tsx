import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPieChartOutlineRounded24Px = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H14c-.55 0-1-.45-1-1zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V14c0-.55.45-1 1-1h5.93A8 8 0 0 1 13 19.93" />
  </svg>
);
const ForwardRef = forwardRef(SvgPieChartOutlineRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
