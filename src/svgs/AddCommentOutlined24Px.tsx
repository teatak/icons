import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddCommentOutlined24Px = (
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
    <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zm-2 13.17L18.83 16H4V4h16zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddCommentOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
