import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVoiceChatSharp24Px = (
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
    <path d="M22 2H2.01L2 22l4-4h16zm-4 12-4-3.2V14H6V6h8v3.2L18 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVoiceChatSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
