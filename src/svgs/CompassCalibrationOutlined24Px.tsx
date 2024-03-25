import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCompassCalibrationOutlined24Px = (
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
    <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-17C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3m4.84 6.47c-1.44-.91-3.1-1.4-4.84-1.4s-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5s5 .79 7.05 2.26z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCompassCalibrationOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
