import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCandlestickChartOutlined24Px = (
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
    <path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zM19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCandlestickChartOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
