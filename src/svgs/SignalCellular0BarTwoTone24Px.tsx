import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellular0BarTwoTone24Px = (
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
    <path d="M2 22h20V2zm18-2H6.83L20 6.83z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellular0BarTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
