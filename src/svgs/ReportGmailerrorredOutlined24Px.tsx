import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReportGmailerrorredOutlined24Px = (
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
    <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z" />
    <circle cx={12} cy={16} r={1} />
    <path d="M11 7h2v7h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgReportGmailerrorredOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
