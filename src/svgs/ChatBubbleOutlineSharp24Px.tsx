import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChatBubbleOutlineSharp24Px = (
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
    <path d="M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChatBubbleOutlineSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
