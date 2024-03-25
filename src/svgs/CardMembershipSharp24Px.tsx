import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCardMembershipSharp24Px = (
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
    <path d="M22 2H2v15h6v5l4-2 4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCardMembershipSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
