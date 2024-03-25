import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerNotesOffTwoTone24Px = (
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
      d="M6 11V9L4 7v10.17L5.17 16H13l-5-5zm2 3H6v-2h2zM20 4H6.66L10 7.34V6h8v2h-7.34l1 1H18v2h-4.34l5 5H20z"
      opacity={0.3}
    />
    <path d="M20 4v12h-1.34l1.91 1.91A2.01 2.01 0 0 0 22 16V4c0-1.1-.9-2-2-2H4.66l2 2zM6 12h2v2H6zm12-1V9h-6.34l2 2zm0-3V6h-8v1.34l.66.66zM1.41 1.59 0 3l2 2.01V22l4-4h9l5.73 5.73 1.41-1.41zM5.17 16 4 17.17V7l2 2v2h2l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeakerNotesOffTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
