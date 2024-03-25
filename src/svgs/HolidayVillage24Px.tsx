import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHolidayVillage24Px = (
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
    <path d="M18 20V8.35L13.65 4h-2.83L16 9.18V20zm4 0V6.69L19.31 4h-2.83L20 7.52V20zM8 4l-6 6v10h5v-5h2v5h5V10zm1 9H7v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHolidayVillage24Px);
const Memo = memo(ForwardRef);
export default Memo;
