import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgModeCommentSharp24Px = (
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
    <path d="M22 2H2v16h16l4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgModeCommentSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
