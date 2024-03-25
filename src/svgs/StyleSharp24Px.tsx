import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStyleSharp24Px = (
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
    <path d="M3.87 20.21v-9.03l-3.19 7.7zm18.92-2.43L16.31 2.14 5.26 6.71l6.48 15.64zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 13h3.45l-3.45-8.34z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStyleSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
