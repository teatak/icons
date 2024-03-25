import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReportProblemTwoTone24Px = (
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
    <path
      d="M12 5.99 4.47 19h15.06zM13 18h-2v-2h2zm-2-4v-4h2v4z"
      opacity={0.3}
    />
    <path d="M12 2 1 21h22zm0 3.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgReportProblemTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
