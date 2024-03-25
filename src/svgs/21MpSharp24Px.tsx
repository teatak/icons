import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg21MpSharp24Px = (
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
    <path d="M15 14h1.5v1.5H15z" />
    <path d="M3 3v18h18V3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z" />
  </svg>
);
const ForwardRef = forwardRef(Svg21MpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
