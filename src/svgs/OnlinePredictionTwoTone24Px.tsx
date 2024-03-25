import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOnlinePredictionTwoTone24Px = (
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
    <path d="M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5m-2.5 6h-2V19h2zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.48 8.48 0 0 1 20.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.97 9.97 0 0 0 22 12M3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.97 9.97 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.48 8.48 0 0 1 3.5 12m14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89M7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.98 6.98 0 0 0 5 12c0 1.93.78 3.68 2.05 4.95" />
  </svg>
);
const ForwardRef = forwardRef(SvgOnlinePredictionTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
