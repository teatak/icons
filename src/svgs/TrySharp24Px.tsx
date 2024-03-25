import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrySharp24Px = (
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
    <path d="M22 2H2v20l4-4h16zm-8.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
