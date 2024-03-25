import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMediationRounded24Px = (
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
    <path d="M18 13h-5.06A8.97 8.97 0 0 1 8 20.05a3.003 3.003 0 0 1-3.55 2.9c-1.2-.21-2.19-1.2-2.4-2.4A2.998 2.998 0 0 1 5 17c.95 0 1.78.45 2.33 1.14A6.97 6.97 0 0 0 10.91 13h-3.1a2.996 2.996 0 0 1-3.42 1.94c-1.18-.23-2.13-1.2-2.35-2.38A3.013 3.013 0 0 1 5 9c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14-.64.8-1.67 1.28-2.81 1.1-1.23-.19-2.26-1.19-2.47-2.42A3.005 3.005 0 0 1 5 1a2.99 2.99 0 0 1 2.99 2.95A8.97 8.97 0 0 1 12.93 11H18V9.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMediationRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
