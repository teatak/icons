import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChangeHistoryTwoTone24Px = (
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
    <path d="M12 7.77 5.61 18h12.78z" opacity={0.3} />
    <path d="M12 4 2 20h20zm0 3.77L18.39 18H5.61z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChangeHistoryTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
