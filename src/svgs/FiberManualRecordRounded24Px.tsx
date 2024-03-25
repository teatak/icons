import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFiberManualRecordRounded24Px = (
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
    <circle cx={12} cy={12} r={8} />
  </svg>
);
const ForwardRef = forwardRef(SvgFiberManualRecordRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
