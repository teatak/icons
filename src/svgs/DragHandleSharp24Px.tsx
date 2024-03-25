import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDragHandleSharp24Px = (
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
    <path d="M20 9H4v2h16zM4 15h16v-2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDragHandleSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
