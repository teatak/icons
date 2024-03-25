import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBarChartOutlined24Px = (
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
    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBarChartOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
