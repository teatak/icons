import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCommentBankRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.76 9.55L16.5 10.5l-1.74 1.05c-.33.2-.76-.04-.76-.43V4h5v7.12a.5.5 0 0 1-.76.43" />
  </svg>
);
const ForwardRef = forwardRef(SvgCommentBankRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
