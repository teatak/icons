import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSystemUpdateTwoTone24Px = (
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
    <path d="M7 19h10V5H7zm4-6V8h2v5h3l-4 4-4-4z" opacity={0.3} />
    <path d="M16 13h-3V8h-2v5H8l4 4zm1-11.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSystemUpdateTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
