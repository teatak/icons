import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSensorOccupiedSharp24Px = (
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
    <path d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3M12 12c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72A9.84 9.84 0 0 0 12 12M21.23 8.15l1.85-.77A12.06 12.06 0 0 0 16.62.92l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92A12.1 12.1 0 0 0 .92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85a10.12 10.12 0 0 1-5.38-5.38M15.85 21.23l.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77a10.12 10.12 0 0 1-5.38 5.38" />
  </svg>
);
const ForwardRef = forwardRef(SvgSensorOccupiedSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
